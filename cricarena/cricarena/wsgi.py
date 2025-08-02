"""
WSGI config for cricarena project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os
import subprocess

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cricarena.settings')
subprocess.call(['python', 'manage.py', 'loaddata', 'backup.json'])
application = get_wsgi_application()
