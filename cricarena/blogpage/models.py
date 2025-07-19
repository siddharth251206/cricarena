from django.db import models

# Create your models here.
class Post( models.Model):
    author_name = models.CharField( max_length=100)
    content = models.TextField()
    is_verified = models.BooleanField( default=False)
    created_at = models.DateTimeField( auto_now_add=True)


    def __str__(self):
        return f"{ self.content[:50]} by {self.author_name}"
    
    