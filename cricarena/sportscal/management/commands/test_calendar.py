from django.core.management.base import BaseCommand
from django.test import RequestFactory
from sportscal.views import calendar_view
from datetime import datetime

class Command(BaseCommand):
    help = 'Test calendar view for different months'

    def handle(self, *args, **options):
        factory = RequestFactory()
        
        # Test current month (default)
        request = factory.get('/sportscal/')
        response = calendar_view(request)
        self.stdout.write(f'Default view status: {response.status_code}')
        
        # Test July 2025
        request = factory.get('/sportscal/2025/7/')
        response = calendar_view(request, year=2025, month=7)
        self.stdout.write(f'July 2025 view status: {response.status_code}')
        
        # Test August 2025
        request = factory.get('/sportscal/2025/8/')
        response = calendar_view(request, year=2025, month=8)
        self.stdout.write(f'August 2025 view status: {response.status_code}')
        
        # Test September 2025
        request = factory.get('/sportscal/2025/9/')
        response = calendar_view(request, year=2025, month=9)
        self.stdout.write(f'September 2025 view status: {response.status_code}')
        
        # Check what the current date is
        current_date = datetime.now()
        self.stdout.write(f'Current date: {current_date}')
        self.stdout.write(f'Current month: {current_date.month}')
        self.stdout.write(f'Current year: {current_date.year}') 