# Generated by Django 4.2.1 on 2023-06-13 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demoapp', '0003_alter_result_score'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='nickname',
            field=models.TextField(max_length=200, null=True),
        ),
    ]
