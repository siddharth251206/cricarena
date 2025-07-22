from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('author_name', 'team_name' , 'is_verified', 'created_at', 'content')
    ordering = ['-created_at']
