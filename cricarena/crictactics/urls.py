from django.urls import path
from .views import tactics_view

urlpatterns = [
    path('', tactics_view, name='tactics'),
]
