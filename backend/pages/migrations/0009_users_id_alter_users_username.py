# Generated by Django 4.2.6 on 2023-10-11 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0008_alter_visits_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='id',
            field=models.BigAutoField(auto_created=True, default=10, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='users',
            name='username',
            field=models.CharField(max_length=60),
        ),
    ]