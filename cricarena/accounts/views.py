from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .forms import LoginForm, SignupForm
from .models import CustomUser
from django.contrib.auth.decorators import login_required
from quiz.models import QuizAttempt
from django.shortcuts import render
from achievements.models import Achievement

@login_required
def profile_view(request):
    user = request.user
    all_attempts = QuizAttempt.objects.filter(user=user)
    achievements = user.achievements.all()

    # 🛠️ Recalculate stats properly
    user.quiz_attempts = all_attempts.count()
    user.highest_score = max((a.score for a in all_attempts), default=0)
    user.save()

    # Now fetch only the recent 5 for display
    quizzes = all_attempts.order_by('-attempted_at')
    total = quizzes.count()
    avg = sum(q.score for q in quizzes) / total if total else 0

    context = {
        'user': user,
        'quizzes': quizzes,
        'total': total,
        'avg_score': round(avg, 2),
        'max_score': user.highest_score,  # ✅ Now correctly updated
        'fav_team': user.fav_ipl_team,
        "achievements": achievements,
    }
    return render(request, 'accounts/profile.html', context)



def login_signup(request):
    show_signup = False
    if request.method == 'POST':
        if 'signup' in request.POST:
            form = SignupForm(request.POST)
            show_signup = True
            if form.is_valid():
                user = form.save()
                login(request, user)
                request.session['nickname'] = user.nickname
                next_url = request.GET.get('next') or request.POST.get('next') or '/home/'
                return redirect(next_url)

            else:
                messages.error(request, "Already registered or invalid info.")
        else:
            form = LoginForm(request, data=request.POST)
            if form.is_valid():
                user = form.get_user()
                login(request, user)
                request.session['nickname'] = user.nickname
                next_url = request.GET.get('next') or request.POST.get('next') or '/home/'
                return redirect(next_url)

            else:
                messages.error(request, "Invalid credentials.")
    else:
        form = LoginForm()
        if request.GET.get('signup') == '1':
            show_signup = True
        elif request.GET.get('login') == '1':
            show_signup = False
        elif 'signup' in request.POST or (hasattr(request, 'POST') and request.POST.get('signup')):
            show_signup = True

    signup_form = SignupForm()
    nickname = request.session.pop('nickname', None)
    return render(request, 'accounts/login_signup.html', {'form': form, 'signup_form': signup_form, 'nickname': nickname, 'show_signup': show_signup})


# View Function: login_signup(request)
# Handles two modes:
# Login: Authenticates existing users.

# Signup: Registers new users using a custom user model (CustomUser).

# Key Logic:
# If POST request (form submitted):

# Checks if it's a signup:

# Uses SignupForm, saves the user if valid, logs them in, stores nickname in session, redirects to homepage.

# If invalid, shows an error.

# Otherwise, assumes it's a login:

# Uses LoginForm, logs user in if valid, stores nickname in session, redirects to homepage.

# If invalid, shows an error.

# If GET request (initial page load or toggle):

# Displays login form by default.

# If query string has ?signup=1, shows signup form.

# Data Passed to Template:
# form: the current login or signup form

# signup_form: empty signup form (for toggling)

# nickname: popped from session (used for greeting popup)

# show_signup: flag to toggle between login and signup views in the HTML

