from django.db import models

class CricketMatch(models.Model):
    title = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    venue = models.CharField(max_length=255, blank=True)
    status = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title
