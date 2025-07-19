from django.urls import path
from . import views
from .views import cricket_quiz, submit_quiz

urlpatterns = [
   path('', views.quiz_home, name='quiz_home'),
path('poll/', views.poll_list, name='poll_list'), 
    path('vote/<int:option_id>/', views.vote, name='vote'),
    # path('quiz/', cricket_quiz, name='cricket_quiz'),  # THIS WILL CREATE NEW PAGE FOR QUIZ NOT GOOD
    path('quiz/', cricket_quiz, name='cricket_quiz'),  
    path('submit/', submit_quiz, name='submit_quiz'),  # Quiz submission
    path('quiz/start/', views.cricket_quiz, name='start_quiz'),
    path('leaderboard/', views.leaderboard_view, name='leaderboard'),
]