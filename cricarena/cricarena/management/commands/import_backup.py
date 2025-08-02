from django.core.management.base import BaseCommand
import os
import subprocess

class Command(BaseCommand):
    help = 'Import data from backup.json once'

    def handle(self, *args, **options):
        if os.path.exists('backup.json'):
            self.stdout.write("Loading data from backup.json...")
            subprocess.call(['python', 'manage.py', 'loaddata', 'backup.json'])
        else:
            self.stdout.write("backup.json file not found.")