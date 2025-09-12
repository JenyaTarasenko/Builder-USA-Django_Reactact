from django.contrib import admin
from django.urls import path, include
from .views import ProjectListAPIViev, ProjectDetailView

# для sitemaps
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticViewSitemap, ProjectSitemap

sitemaps = {
    'static': StaticViewSitemap,
    'projects': ProjectSitemap,
}



app_name = 'api'
urlpatterns = [
    path('projects/', ProjectListAPIViev.as_view(), name='project-list'),#Первая страничка 
    path('projects/<slug:slug>', ProjectDetailView.as_view(), name='project-detail'),#детальная страница
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django-sitemap'),
]