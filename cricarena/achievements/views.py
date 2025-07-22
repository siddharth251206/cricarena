from django.shortcuts import render
from .models import UserAchievement, Achievement

def user_achievements(request):
    # All achievements
    total_achievements = Achievement.objects.count()

    # User's unlocked achievements
    unlocked_achievements = UserAchievement.objects.filter(user=request.user).select_related('achievement')
    unlocked_ids = [ua.achievement.id for ua in unlocked_achievements]

    # Locked = All achievements - Unlocked ones
    locked_achievements = Achievement.objects.exclude(id__in=unlocked_ids)

    # Calculate progress
    unlocked_count = len(unlocked_achievements)
    unlocked_percent = int((unlocked_count / total_achievements) * 100) if total_achievements > 0 else 0

    context = {
        'unlocked_achievements': unlocked_achievements,
        'locked_achievements': locked_achievements,
        'unlocked_count': unlocked_count,
        'unlocked_percent': unlocked_percent,
        'total_achievements': total_achievements,
    }
    return render(request, 'achievements/user_achievements.html', context)
