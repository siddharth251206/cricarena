# news/management/commands/fetch_cricket_news.py

import feedparser
from dateutil.parser import parse as parse_datetime
from django.core.management.base import BaseCommand
from news.models import Article

# Use HTTPS for the ESPNcricinfo RSS
FEED_URL = "https://www.espncricinfo.com/rss/content/story/feeds/0.xml"

class Command(BaseCommand):
    help = "Fetch latest cricket news from ESPNcricinfo RSS and save to the DB (with debug)"

    def handle(self, *args, **options):
        # 1) Parse the RSS feed
        feed = feedparser.parse(FEED_URL)

        # Debug: show feed title and number of entries
        # self.stdout.write(f"[DEBUG] Feed title: {feed.feed.get('title', '—no title—')}")
        # self.stdout.write(f"[DEBUG] Total entries fetched: {len(feed.entries)}\n")

        entries = feed.entries[:30]  # limit to 30 newest articles

        count = 0
        for idx, entry in enumerate(entries, start=1):
            # Debug: show available keys on the first entry
            # if idx == 1:
                # self.stdout.write(f"[DEBUG] Entry[0] keys: {list(entry.keys())}\n")

            title = entry.get('title', '').strip()
            link  = entry.get('link', '').strip()
            # some feeds use 'description', some 'summary'
            description = entry.get('description', entry.get('summary', '')).strip()

            # try thumbnail then media_content
            image_url = ''
            thumb = entry.get('media_thumbnail')
            if thumb and isinstance(thumb, list):
                image_url = thumb[0].get('url', '').strip()
            elif entry.get('media_content'):
                image_url = entry['media_content'][0].get('url', '').strip()

            # published or updated
            published_raw = entry.get('published') or entry.get('updated') or ''
            try:
                published_dt = parse_datetime(published_raw)
            except Exception:
                published_dt = None

            # Debug: show which fields passed
            # self.stdout.write(
            #     f"[DEBUG][{idx}] title={'OK' if title else 'MISSING'} "
            #     f"link={'OK' if link else 'MISSING'} "
            #     f"image={'OK' if image_url else 'MISSING'} "
            #     f"pub_dt={'OK' if published_dt else 'MISSING'}"
            # )

            # Skip if any required field is missing
            if not (title and link and image_url and published_dt):
                # self.stdout.write(f"  → Skipping entry {idx}\n")
                continue

            # Finally, save/update the Article
            obj, created = Article.objects.update_or_create(
                link=link,
                defaults={
                    'title':       title,
                    'description': description,
                    'image_url':   image_url,
                    'published':   published_dt,
                    'category':    'cricket',
                }
            )
            count += 1
            # self.stdout.write(f"  → {'Created' if created else 'Updated'} article #{idx}: {title}\n")

        self.stdout.write(self.style.SUCCESS(f"\nImported {count} cricket articles from ESPNcricinfo"))
