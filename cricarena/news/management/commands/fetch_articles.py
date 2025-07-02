import requests
from django.core.management.base import BaseCommand
from news.models import Article
from django.utils.dateparse import parse_datetime

# Replace this with your actual key or load from environment later
# NEWSAPI_KEY = 'your_newsapi_key_here'
from django.conf import settings
NEWSAPI_KEY = settings.NEWSAPI_KEY


class Command(BaseCommand):
    help = 'Fetch cricket news from NewsAPI.org and save to the database'

    def handle(self, *args, **kwargs):

        url = 'https://newsapi.org/v2/everything'
        params = {
            'q': 'cricket',
            'language': 'en',
            'sortBy': 'publishedAt',
            'apiKey': NEWSAPI_KEY,
        }

        try:
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
        except requests.RequestException as e:
            self.stderr.write(self.style.ERROR(f'API error: {e}'))
            return

        data = response.json()
        articles = data.get('articles', [])

        for item in articles:
            Article.objects.update_or_create(
                link=item.get('url'),
                defaults={
                    'title': item.get('title'),
                    'description': item.get('description'),
                    'image_url': item.get('urlToImage'),
                    'published': parse_datetime(item.get('publishedAt')),
                }
            )

        self.stdout.write(self.style.SUCCESS(f'Successfully fetched {len(articles)} articles.'))
