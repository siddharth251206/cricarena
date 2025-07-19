# from django.urls import path
# from .views import PostListCreate
# from . import views

# # urlpatterns = [
# #     path('blogpage/', views.blog_page, name='blogpage'),
# #     path('', PostListCreate.as_view(), name='post-list-create'),
# #     path('api/posts/', PostListCreate.as_view(), name='post-list-create'),
# # ]

# urlpatterns = [
#     path('blogpage/', views.blog_page, name='blogpage'),
#     path('api/posts/', PostListCreate.as_view(), name='post-list-create'),
#     # Optional: only keep one of these if you intend to mount it at root
#     # path('', PostListCreate.as_view(), name='post-list-create'),
# ]

from django.urls import path
from . import views
from .views import PostListCreate, blog_page

urlpatterns = [
    path('', blog_page, name='blogpage'),
    path('api/posts/', PostListCreate.as_view(), name='post-list-create'),
]