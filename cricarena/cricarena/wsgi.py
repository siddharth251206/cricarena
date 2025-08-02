import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cricarena.settings')

# Auto-load backup
try:
    from django.core.management import call_command
    call_command('import_backup')
except Exception as e:
    print(f"Backup import failed: {e}")

application = get_wsgi_application()