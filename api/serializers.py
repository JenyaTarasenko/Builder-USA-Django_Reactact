from rest_framework import serializers
from .models import Project
from django.conf import settings


class ProjectSerializer(serializers.ModelSerializer):
    
    # image = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = '__all__'
        # fields = ['id', 'name', 'slug', 'description', 'image',  'image2', 'image3', 'tehnology_project', 'image_after', 'image_after2','image_after3']
        