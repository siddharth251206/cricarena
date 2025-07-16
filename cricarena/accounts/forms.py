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
