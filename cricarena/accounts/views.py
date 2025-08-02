from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib import messages
from .forms import LoginForm, SignupForm
from .models import CustomUser
from django.contrib.auth.decorators import login_required
from quiz.models import QuizAttempt
from achievements.models import UserAchievement
from accounts.models import IPL_TEAMS
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse


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
        if new_team in dict(IPL_TEAMS):
            request.user.fav_ipl_team = new_team
            request.user.save()
            messages.success(request, f"Your favorite team has been updated to {new_team}.")
        else:
            messages.error(request, "Invalid team selected.")
    return redirect('profile')


@login_required
def profile_view(request):
    user = request.user
    all_attempts = QuizAttempt.objects.filter(user=user)

    user_achievements = UserAchievement.objects.filter(user=user).select_related('achievement').order_by('-date_awarded')

    user.quiz_attempts = all_attempts.count()
    user.highest_score = max((a.score for a in all_attempts), default=0)
    user.save()

    quizzes = all_attempts.order_by('-attempted_at')
    total = quizzes.count()
    avg = sum(q.score for q in quizzes) / total if total else 0
    from_url = request.GET.get('from')
    if from_url and 'profile' not in from_url:
        request.session['back_url'] = from_url

    back_url = request.session.get('back_url', '/')

    context = {
        'user': user,
        'quizzes': quizzes,
        'total': total,
        'avg_score': round(avg, 2),
        'max_score': user.highest_score,
        'fav_team': user.fav_ipl_team,
        'IPL_TEAMS': IPL_TEAMS,
        'back_url': back_url,
        'achievements': [ua.achievement for ua in user_achievements],
        'recent_achievements': user_achievements[:4],
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
                messages.error(request, "Please correct the errors below.")
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

    signup_form = SignupForm()
    nickname = request.session.get('nickname')
    return render(request, 'accounts/login_signup.html', {
        'form': form,
        'signup_form': signup_form,
        'nickname': nickname,
        'show_signup': show_signup
    })


def clear_back_url(request):
    request.session.pop('back_url', None)
    return HttpResponse('')