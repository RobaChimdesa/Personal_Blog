# Generated by Django 5.0.3 on 2024-10-25 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myblog', '0006_blog_remove_customuser_groups_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.URLField(blank=True, default='/home/roba/Documents/My_blog/Frontend/myblog/src/assets/img4.jpeg', max_length=500),
            preserve_default=False,
        ),
    ]
