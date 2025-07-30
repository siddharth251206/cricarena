from django.core.management.base import BaseCommand
from sportscal.models import CricketMatch

class Command(BaseCommand):
    help = 'Check April and May cricket matches'

    def handle(self, *args, **options):
        # Check April matches
        april_matches = CricketMatch.objects.filter(start_date__month=4)
        self.stdout.write(f'April matches: {april_matches.count()}')
        
        if april_matches.count() > 0:
            self.stdout.write('Sample April matches:')
            for match in april_matches[:10]:
                self.stdout.write(f'  - {match.title} ({match.start_date})')
        
        # Check May matches
        may_matches = CricketMatch.objects.filter(start_date__month=5)
        self.stdout.write(f'\nMay matches: {may_matches.count()}')
        
        if may_matches.count() > 0:
            self.stdout.write('Sample May matches:')
            for match in may_matches[:10]:
                self.stdout.write(f'  - {match.title} ({match.start_date})')
        
        # Check total matches
        total_matches = CricketMatch.objects.count()
        self.stdout.write(f'\nTotal matches in database: {total_matches}')
        
        # Check all months
        from django.db.models import Count
        months = CricketMatch.objects.extra(
            select={'month': 'EXTRACT(month FROM start_date)'}
        ).values('month').annotate(count=Count('id')).order_by('month')
        
        self.stdout.write('\nMatches by month:')
        for month in months:
            self.stdout.write(f'  Month {month["month"]}: {month["count"]} matches') 