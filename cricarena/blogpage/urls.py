from django.urls import path
from . import views
from .views import PostListCreate, blog_page

urlpatterns = [
    path('', blog_page, name='blogpage'),
    path('blogpage/api/posts/', PostListCreate.as_view(), name='post-list-create'),
]