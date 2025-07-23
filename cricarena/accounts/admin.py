from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'nickname', 'fav_ipl_team', 'is_staff','avatar']  # Add this!
    fieldsets = UserAdmin.fieldsets + (
        ('Extra Info', {'fields': ('nickname', 'fav_ipl_team')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
