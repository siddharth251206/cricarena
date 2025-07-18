from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser, IPL_TEAMS

class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))

class SignupForm(UserCreationForm):
    email = forms.EmailField()
    nickname = forms.CharField()
    fav_ipl_team = forms.ChoiceField(choices=IPL_TEAMS, widget=forms.RadioSelect)

    class Meta:
        model = CustomUser
        fields = ('username', 'nickname', 'email', 'password1', 'password2', 'fav_ipl_team')


# This file defines two custom forms used for user login and signup in your project.

# 1. LoginForm
# Inherits from Django’s built-in AuthenticationForm.

# Customizes the username and password fields with placeholders for a better UI.

# Used to authenticate existing users.

# 2. SignupForm
# Inherits from Django’s UserCreationForm to simplify user registration.

# Adds custom fields:

# email

# nickname

# fav_ipl_team (as radio buttons, using choices from IPL_TEAMS)

# Specifies that the form is tied to the CustomUser model and lists all required fields.