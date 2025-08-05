from django.db import models
from django.contrib.auth import get_user_model
from accounts.models import CustomUser
from django.db.models.signals import post_delete
from django.dispatch import receiver


User = get_user_model()
class QuizResult(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    score = models.IntegerField()
    total = models.IntegerField()
    difficulty = models.CharField(max_length=20, default='Medium')
    time_taken = models.DurationField(null=True, blank=True)
    # attempted_at = models.DateTimeField(auto_now_add=True)

    def percentage(self):
        return (self.score / self.total) * 100



class Poll(models.Model):
    question = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question


class Option(models.Model):

    poll = models.ForeignKey(Poll, related_name='options', on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.text

# --------------------------------------
# QUIZ PART


class QuizQuestion(models.Model):
    question_text = models.TextField()
    option1 = models.CharField(max_length=200)
    option2 = models.CharField(max_length=200)
    option3 = models.CharField(max_length=200)
    option4 = models.CharField(max_length=200)
    correct_option = models.PositiveSmallIntegerField(choices=[(1, 'Option 1'), (2, 'Option 2'), (3, 'Option 3'), (4, 'Option 4')])
    DIFFICULTY_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]
    difficulty = models.CharField(
        max_length=10,
        choices=DIFFICULTY_CHOICES,
        default='medium'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question_text

class QuizAttempt(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    score = models.IntegerField()
    total = models.IntegerField(default=0)
    difficulty = models.CharField(max_length=20, blank=True, null=True)
    time_taken = models.DurationField(null=True, blank=True)

    def formatted_time_taken(self):
        if self.time_taken:
            total_seconds = int(self.time_taken.total_seconds())
            minutes = total_seconds // 60
            seconds = total_seconds % 60
            return f"{minutes:02d}:{seconds:02d}"
        return "N/A"

    attempted_at = models.DateTimeField(auto_now_add=True)
    questions = models.ManyToManyField(QuizQuestion, blank=True)  # ✅ THIS LINE ADDED

    def __str__(self):
        return f'{self.user.username} - ({self.score}/{self.total})'

    
class LeaderboardProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    average_rating = models.FloatField(default=0.0)
    last_rating = models.FloatField(default=0.0)
    accuracy = models.FloatField(default=0.0)
    quizzes_taken = models.IntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} Rating: {self.average_rating:.2f}'
    
@receiver(post_delete, sender=QuizAttempt)
def cleanup_leaderboard_if_empty(sender, instance, **kwargs):
    user = instance.user
    if not QuizAttempt.objects.filter(user=user).exists():
        LeaderboardProfile.objects.filter(user=user).delete()