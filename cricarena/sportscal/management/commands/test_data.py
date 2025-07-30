from django.core.management.base import BaseCommand
from sportscal.models import CricketMatch
from datetime import date

class Command(BaseCommand):
    help = 'Test if cricket match data was loaded properly'

    def handle(self, *args, **options):
        # Check total number of matches
        total_matches = CricketMatch.objects.count()
        self.stdout.write(f'Total matches in database: {total_matches}')
        
        # Check matches for different months
        months_to_check = [2, 6, 7, 8, 9, 10, 11, 12]
        
        for month in months_to_check:
            matches_in_month = CricketMatch.objects.filter(
                start_date__month=month
            ).count()
            self.stdout.write(f'Matches in month {month}: {matches_in_month}')
            
            if matches_in_month > 0:
                sample_matches = CricketMatch.objects.filter(
                    start_date__month=month
                )[:3]
                for match in sample_matches:
                    self.stdout.write(f'  - {match.title} ({match.start_date} to {match.end_date})')
        
        # Check specific months
        july_matches = CricketMatch.objects.filter(start_date__month=7)
        august_matches = CricketMatch.objects.filter(start_date__month=8)
        
        self.stdout.write(f'\nJuly matches: {july_matches.count()}')
        self.stdout.write(f'August matches: {august_matches.count()}')
        
        if july_matches.count() > 0:
            self.stdout.write('Sample July matches:')
            for match in july_matches[:5]:
                self.stdout.write(f'  - {match.title}')
        
        if august_matches.count() > 0:
            self.stdout.write('Sample August matches:')
            for match in august_matches[:5]:
                self.stdout.write(f'  - {match.title}') 