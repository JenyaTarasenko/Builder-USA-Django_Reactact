from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'tehnology_project', 'image','image2','image3',"image_after",'image_after2',"image_after3"]
    # для автоматического слага важноо
    prepopulated_fields = {"slug": ("name",)}
