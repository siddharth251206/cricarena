from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()




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
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question_text[:50] + "..." if len(self.question_text) > 50 else self.question_text

class QuizAttempt(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    score = models.IntegerField()
    attempted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Attempt by {self.user.username if self.user else 'Anonymous'} - Score: {self.score}"