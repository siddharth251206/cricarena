from django.contrib import admin
from .models import Team, Player

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'color')
    search_fields = ('name', 'short_name')


@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    list_display = ('name', 'team', 'role', 'country', 'age')
    search_fields = ('name', 'country', 'role')
    list_filter = ('team', 'role', 'country')