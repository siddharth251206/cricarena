from django.urls import path
from . import views
app_name = 'achievements'
urlpatterns = [
    path('my/', views.user_achievements, name='user_achievements'),
]
