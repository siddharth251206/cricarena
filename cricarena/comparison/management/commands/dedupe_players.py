from django.core.management.base import BaseCommand
from django.db import transaction
from comparison.models import Player


class Command(BaseCommand):
    help = 'Remove duplicate players by name, keeping the record with a non-name id if available.'

    def handle(self, *args, **options):
        removed = 0
        with transaction.atomic():
            # Group players by name
            name_to_players = {}
            for player in Player.objects.all():
                name_to_players.setdefault(player.name, []).append(player)

            for name, group in name_to_players.items():
                if len(group) <= 1:
                    continue
                # Prefer an id that is not exactly the name (case-insensitive)
                keep = None
                for p in group:
                    if p.id.lower() != p.name.lower():
                        keep = p
                        break
                if keep is None:
                    keep = group[0]
                # Delete others
                for p in group:
                    if p.pk != keep.pk:
                        p.delete()
                        removed += 1

        self.stdout.write(self.style.SUCCESS(f'Deduplication complete. Removed {removed} duplicates.'))

