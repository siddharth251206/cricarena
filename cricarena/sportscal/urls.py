from django.urls import path
from . import views

urlpatterns = [
    path('', views.calendar_view, name='calendar_current'),
    path('<int:year>/<int:month>/', views.calendar_view, name='calendar'),
]
