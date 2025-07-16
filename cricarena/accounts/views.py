from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .forms import LoginForm, SignupForm
from .models import CustomUser

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
                return redirect('/home/')
            else:
                messages.error(request, "Already registered or invalid info.")
        else:
            form = LoginForm(request, data=request.POST)
            if form.is_valid():
                user = form.get_user()
                login(request, user)
                request.session['nickname'] = user.nickname
                return redirect('/home/')
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
