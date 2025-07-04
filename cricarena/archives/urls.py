from django.urls import path
from . import views

urlpatterns = [
    path('', views.react_page, name='react-root'),  # ← this handles /archives/
    path('timeline/', views.react_page, name='react-page'),  # optional extra
]
