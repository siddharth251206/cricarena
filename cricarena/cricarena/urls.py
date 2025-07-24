"""
URL configuration for cricarena project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from entrance.views import entrance_view
from home.views import home_view
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', entrance_view, name='entrance'),     # Default: /
    path('home/', home_view, name='h_index'),      # After clicking "Enter Arena"
    path('news/', include('news.urls')), # News page
    path('stadium/', include('stadium.urls')), 
    path('login/', include('accounts.urls')),
    path('accounts/', include('accounts.urls')),
    path('archives/', include('archives.urls')),
    path('ipl/', include('ipl.urls')), 
    path('calender/', include('sportscal.urls')),
    path('sportscal/', include('sportscal.urls')),
    path('quiz/', include('quiz.urls')),
    path('tactics/', include('crictactics.urls')),
    path('comparison/', include('comparison.urls')),
    path('blogpage/', include('blogpage.urls')),
    path('achievements/', include('achievements.urls')),
    path('aboutus/', include('aboutus.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    
