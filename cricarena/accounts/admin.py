from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        ('Extra Info', {'fields': ('nickname', 'fav_ipl_team')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
