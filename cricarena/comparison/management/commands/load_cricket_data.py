import os
import json
from django.core.management.base import BaseCommand
from django.db.models import Q
from comparison.models import Team, Player  # replace with your app's model import

class Command(BaseCommand):
    help = 'Load teams and players from JSON into DB safely'

    def handle(self, *args, **kwargs):
        # Locate data.json
        base_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(base_dir, 'data.json')

        if not os.path.exists(file_path):
            self.stderr.write(self.style.ERROR(f"data.json not found at {file_path}"))
            return

        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)

        DEFAULT_PHOTOS = {
            'Wicket-keeper': '/static/comparison/img/wk.png',
            'Bowler': '/static/comparison/img/ball.png',
            'Batsman': '/static/comparison/img/bat.png',
            'All-rounder': '/static/comparison/img/all.png'
        }

        # ---- Load Teams ----
        for t in data['teams']:
            Team.objects.update_or_create(
                id=t['id'],  # PK match
                defaults={
                    'name': t['name'].strip(),
                    'short_name': t['shortName'].strip(),
                    'color': t['color'],
                    'logo': t['logo']
                }
            )

        # ---- Load Players ----
        for p in data['players']:
            player_name = p['name'].strip()
            stats = p.get('stats', {})
            batting_stats = stats.get('batting', {})
            bowling_stats = stats.get('bowling', {})
            fielding_stats = stats.get('fielding', {})

            photo_path = p.get('photo') or DEFAULT_PHOTOS.get(p['role'], 'photos/default_player.png')

            Player.objects.update_or_create(
                name__iexact=player_name,  # case-insensitive match
                defaults={
                    'name': player_name,
                    'team': Team.objects.get(id=p['team']),
                    'role': p['role'],
                    'country': p['country'],
                    'age': p['age'],
                    'photo': photo_path,
                    # Batting
                    'batting_matches': batting_stats.get('matches', 0),
                    'batting_runs': batting_stats.get('runs', 0),
                    'batting_average': batting_stats.get('average', 0),
                    'batting_strike_rate': batting_stats.get('strikeRate', 0),
                    'batting_fifties': batting_stats.get('fifties', 0),
                    'batting_hundreds': batting_stats.get('hundreds', 0),
                    'batting_highest_score': batting_stats.get('highestScore', 0),
                    # Bowling
                    'bowling_wickets': bowling_stats.get('wickets', 0),
                    'bowling_average': bowling_stats.get('average', 0),
                    'bowling_economy': bowling_stats.get('economy', 0),
                    'bowling_best_figures': bowling_stats.get('bestFigures', '0/0'),
                    'bowling_five_wickets': bowling_stats.get('fiveWickets', 0),
                    # Fielding
                    'catches': fielding_stats.get('catches', 0),
                    'stumpings': fielding_stats.get('stumpings', 0)
                }
            )

        self.stdout.write(self.style.SUCCESS('✅ Data loaded successfully!'))
