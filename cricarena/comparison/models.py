from django.db import models

class Team(models.Model):
    id = models.CharField(max_length=10, primary_key=True)  # e.g., 'csk'
    name = models.CharField(max_length=100)
    short_name = models.CharField(max_length=10)
    color = models.CharField(max_length=20)
    logo = models.URLField()

    def __str__(self):
        return self.name


class Player(models.Model):
    name = models.CharField(max_length=100, unique=True)
    team = models.ForeignKey(Team, related_name='players', on_delete=models.CASCADE)
    role = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    age = models.IntegerField()
    photo = models.URLField(blank=True, null=True)

    # Store all batting, bowling, and fielding stats in one JSON field
    stats = models.JSONField(default=dict)  # default empty {}

    def __str__(self):
        return self.name
