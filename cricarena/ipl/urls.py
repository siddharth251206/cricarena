from django.urls import path
from . import views

urlpatterns = [
    path('', views.ipl_home, name='ipl_home'),
]
