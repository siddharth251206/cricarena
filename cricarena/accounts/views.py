from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .forms import LoginForm, SignupForm
from .models import CustomUser
from django.contrib.auth.decorators import login_required
from quiz.models import QuizAttempt
from achievements.models import UserAchievement
from accounts.models import IPL_TEAMS
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt

@login_required
def edit_profile(request):
    user = request.user
    if request.method == 'POST':
        nickname = request.POST.get('nickname')
        email = request.POST.get('email')
        avatar = request.FILES.get('avatar')
        remove_avatar = request.POST.get('remove_avatar')

        user.nickname = nickname
        user.email = email

        if remove_avatar:
            user.avatar.delete(save=False)
            user.avatar = None

        elif avatar:
            user.avatar = avatar

        user.save()
        messages.success(request, "Profile updated.")
        return redirect('profile')

    
@login_required
def change_fav_team(request):
    if request.method == "POST":
        new_team = request.POST.get("new_team")
        if new_team in dict(IPL_TEAMS):  # Validate team code
            request.user.fav_ipl_team = new_team
            request.user.save()
            messages.success(request, f"Your favorite team has been updated to {new_team}.")
        else:
            messages.error(request, "Invalid team selected.")
    return redirect('profile')  # use your profile view's URL name

@login_required
def profile_view(request):
    user = request.user
    all_attempts = QuizAttempt.objects.filter(user=user)

    # Fetch all achievements with date_awarded
    user_achievements = UserAchievement.objects.filter(user=user).select_related('achievement').order_by('-date_awarded')

    # Update stats
    user.quiz_attempts = all_attempts.count()
    user.highest_score = max((a.score for a in all_attempts), default=0)
    user.save()

    quizzes = all_attempts.order_by('-attempted_at')
    total = quizzes.count()
    avg = sum(q.score for q in quizzes) / total if total else 0

    context = {
        'user': user,
        'quizzes': quizzes,
        'total': total,
        'avg_score': round(avg, 2),
        'max_score': user.highest_score,
        'fav_team': user.fav_ipl_team,
        'IPL_TEAMS': IPL_TEAMS,
        
        # Achievements
        'achievements': [ua.achievement for ua in user_achievements],  # All achievements
        'recent_achievements': user_achievements[:4],  # Last 4
        'total_achievements': user_achievements.count(),
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
    nickname = request.session.get('nickname')
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

