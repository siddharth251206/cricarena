# achievements/views.py
from django.shortcuts import render
from .models import Achievement

def user_achievements(request):
    user_achievements = request.user.achievements.all()
    return render(request, 'achievements/user_achievements.html', {
        'achievements': user_achievements
    })
