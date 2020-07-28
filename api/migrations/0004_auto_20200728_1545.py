# Generated by Django 3.0.7 on 2020-07-28 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200728_1029'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='day_of_week',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='eastern_time',
        ),
        migrations.AddField(
            model_name='appointment',
            name='hsm',
            field=models.IntegerField(blank=True, null=True, verbose_name='hours since monday at 12am (eastern time)'),
        ),
        migrations.DeleteModel(
            name='Day',
        ),
        migrations.DeleteModel(
            name='Time',
        ),
    ]
