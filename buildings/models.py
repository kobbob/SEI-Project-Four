from django.db import models

# Create your models here.
class Building(models.Model):
    building_name: models.CharField(max_length=100, default=None)
    building_location: models.CharField(max_length=100, default=None)
    date_built: models.PositiveIntegerField(default=None)
    architect: models.CharField(max_length=100, default=None)
    description: models.CharField(max_length=500, default=None)
    image_caption: models.CharField(max_length=50, default=None)
    image_source: models.CharField(max_length=50, default=None)
    image_url: models.URLField(default=None)
    source_info: models.CharField(max_length=100, default=None)
    source_url: models.URLField(default=None)

