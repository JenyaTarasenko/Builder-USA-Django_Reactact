from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    name = models.CharField(max_length=200, verbose_name='Название проектов')
    slug = models.SlugField(unique=True, blank=True, null=True, verbose_name="Слаг")
    description = models.TextField(verbose_name="Описание проекта")
    tehnology_project = models.TextField(default='Технологии не указаны', verbose_name="Технологии проекта")
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    image2 = models.ImageField(upload_to='products/', null=True, blank=True)
    image3 = models.ImageField(upload_to='products/', null=True, blank=True)

    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)  
        
        
              
    def __str__(self):
        return self.name
