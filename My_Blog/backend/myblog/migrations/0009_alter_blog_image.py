# Generated by Django 5.0.3 on 2024-10-25 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myblog', '0008_alter_blog_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.URLField(blank=True, default='/home/roba/Downloads/lord.jpg', max_length=500),
            preserve_default=False,
        ),
    ]