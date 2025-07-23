from django.db import models

class Post(models.Model):
    author_name = models.CharField(max_length=100)
    team_name = models.CharField(max_length=100)
    is_verified = models.BooleanField(default=False)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author_name} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
