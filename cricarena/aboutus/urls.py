from .views import aboutus_page
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('', aboutus_page, name='aboutus'),
    path("robots.txt", TemplateView.as_view(template_name="robots.txt", content_type="text/plain")),
]
