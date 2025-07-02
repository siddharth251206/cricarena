from django.urls import path
from . import views

urlpatterns = [
    path('', views.stadium_home, name='stadium_home'),
]
