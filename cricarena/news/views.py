from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.db.models import F, Q
from django.views.decorators.http import require_POST

from .models import Article


# def fetch_cricket_articles():
#     import requests

#     API_URL = "https://your-api.com/news"
#     NEWSAPI_KEY = "your_api_key"

#     headers = {
#         "Authorization": f"Bearer {NEWSAPI_KEY}",
#     }

#     params = {
#         "category": "cricket",  # Make sure your API supports this
#         "pageSize": 50,         # Fetch more so we can filter
#         "language": "en"
#     }

#     response = requests.get(API_URL, headers=headers, params=params)

#     if response.status_code == 200:
#         raw_articles = response.json().get("articles", [])
#         cricket_articles = []

#         for article in raw_articles:
#             # if ("cricket" in article.get("title", "").lower() or 
#             #     "cricket" in article.get("description", "").lower()):
#             if ("cricket" in article.get("title", "").lower() ): 
#                 if article.get("image_url"):  # Ensure image is present
#                     cricket_articles.append(article)

#         return cricket_articles  # Limit to 30 accurate articles

#     return []


def news_home(request):
    q = request.GET.get('q', '')
    team = request.GET.get('team', '')
    from_date = request.GET.get('from')  
    to_date = request.GET.get('to')      

    # articles = Article.objects.all()
    # Only show articles where category is cricket
    # articles = Article.objects.filter(category__iexact="cricket")
    articles = Article.objects.filter(
        category__iexact="cricket",
    ).exclude(
        image_url__isnull=True
    ).exclude(
        image_url__exact=''
    )

    # Apply filters
    if q:
        articles = articles.filter(Q(title__icontains=q) | Q(description__icontains=q))
    if team:
        articles = articles.filter(teams__name__iexact=team)
    if from_date and to_date:
        articles = articles.filter(published__date__range=[from_date, to_date])

    trending = articles.order_by('-likes')[:10]
    latest = articles.order_by('-published')[:20]

    # Unique team names (excluding blanks/nulls)
    teams = set(articles.exclude(teams__name__isnull=True).exclude(teams__name='').values_list('teams__name', flat=True))

    context = {
        'trending': trending,
        'latest': latest,
        'teams': teams,
        'query': q
    }

    return render(request, 'news/home.html', context)


def latest_articles_json(request):
    # articles = Article.objects.order_by('-published')[:10]

    articles = Article.objects.filter(
        category__iexact="cricket"
    ).exclude(
        image_url__isnull=True
    ).exclude(
        image_url__exact=''
    ).order_by('-published')[:10]

    data = [
        {
            'id': art.id,
            'title': art.title,
            'description': art.description,
            'image_url': art.image_url,
            'link': art.link,
            'likes': art.likes,
            'published': art.published.strftime('%b %d, %Y'),
        }
        for art in articles
    ]
    return JsonResponse({'articles': data})

@require_POST
def like_article(request, aid):
    article = get_object_or_404(Article, id=aid)
    article.likes = F('likes') + 1
    article.save(update_fields=['likes'])
    article.refresh_from_db()
    return JsonResponse({'likes': article.likes})
