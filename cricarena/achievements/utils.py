from .models import Achievement, UserAchievement

def award_achievement(user, achievement_name):
    try:
        achievement = Achievement.objects.get(name=achievement_name)
        # Check if already awarded
        if not UserAchievement.objects.filter(user=user, achievement=achievement).exists():
            UserAchievement.objects.create(user=user, achievement=achievement)
    except Achievement.DoesNotExist:
        pass
