# dump_utf8.py

import os
import django
from django.core.management import call_command

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cricarena.settings")
django.setup()

with open("all_data.json", "w", encoding="utf-8") as f:
    call_command(
        "dumpdata",
        indent=2,
        exclude=["contenttypes", "sessions"], 
        stdout=f
    )
