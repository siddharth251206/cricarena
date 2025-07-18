from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', views.login_signup, name='accounts_root'),  # This line handles /accounts/
    path('login/', views.login_signup, name='login_signup'),
    path('logout/', LogoutView.as_view(next_page='/home/'), name='logout'),
]
