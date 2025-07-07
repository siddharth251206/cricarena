from django.urls import path
from . import views

urlpatterns=[
    path('', views.comparison_page, name='comparison'),
]