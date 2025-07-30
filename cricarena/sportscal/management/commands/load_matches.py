from django.core.management.base import BaseCommand
from django.db import connection
import os
import re

class Command(BaseCommand):
    help = 'Load cricket matches data from SQL file'

    def handle(self, *args, **options):
        # Get the path to the SQL file
        sql_file_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.dirname(__file__))),
            'sql',
            'matches2025.sql'
        )
        
        try:
            with open(sql_file_path, 'r') as file:
                sql_content = file.read()
            
            # Split SQL content into individual statements
            # Remove comments and split by semicolon
            sql_content = re.sub(r'--.*$', '', sql_content, flags=re.MULTILINE)
            statements = [stmt.strip() for stmt in sql_content.split(';') if stmt.strip()]
            
            # Execute each statement
            with connection.cursor() as cursor:
                for statement in statements:
                    if statement:
                        cursor.execute(statement)
            
            self.stdout.write(
                self.style.SUCCESS(f'Successfully loaded {len(statements)} SQL statements from file')
            )
            
        except FileNotFoundError:
            self.stdout.write(
                self.style.ERROR(f'SQL file not found at {sql_file_path}')
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'Error loading SQL data: {str(e)}')
            ) 