from django.contrib.auth.models import AbstractUser
from django.db import models
from achievements.models import Achievement
from django.utils import timezone

IPL_TEAMS = [
    ('CSK', 'Chennai Super Kings'),
    ('MI', 'Mumbai Indians'),
    ('RCB', 'Royal Challengers Bangalore'),
    ('KKR', 'Kolkata Knight Riders'),
    ('RR', 'Rajasthan Royals'),
    ('DC', 'Delhi Capitals'),
    ('LSG', 'Lucknow Super Giants'),
    ('GT', 'Gujarat Titans'),
    ('PBKS', 'Punjab Kings'),
    ('SRH', 'Sunrisers Hyderabad'),
]

class CustomUser(AbstractUser):
    nickname = models.CharField(max_length=30, blank=True, null=True)
    fav_ipl_team = models.CharField(max_length=20, choices=IPL_TEAMS, blank=True, null=True)
    quiz_attempts = models.IntegerField(default=0)
    highest_score = models.PositiveIntegerField(default=0)
    date_joined = models.DateTimeField(default=timezone.now)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    def __str__(self):
        return self.username
# accounts/models.py

