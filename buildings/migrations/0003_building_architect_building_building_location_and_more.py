# Generated by Django 4.0.5 on 2022-06-15 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buildings', '0002_remove_building_architect_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='building',
            name='architect',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='building',
            name='building_location',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='building',
            name='building_name',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='building',
            name='date_built',
            field=models.PositiveIntegerField(default=None),
        ),
        migrations.AddField(
            model_name='building',
            name='description',
            field=models.CharField(default=None, max_length=500),
        ),
        migrations.AddField(
            model_name='building',
            name='image_caption',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='building',
            name='image_source',
            field=models.CharField(default=None, max_length=50),
        ),
        migrations.AddField(
            model_name='building',
            name='image_url',
            field=models.URLField(default=None),
        ),
        migrations.AddField(
            model_name='building',
            name='source_info',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='building',
            name='source_url',
            field=models.URLField(default=None),
        ),
    ]