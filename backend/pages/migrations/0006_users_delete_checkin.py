# Generated by Django 4.2.6 on 2023-10-11 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_alter_visits_checkouttime'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('username', models.CharField(max_length=60, primary_key=True, serialize=False)),
                ('firstname', models.CharField(max_length=60)),
                ('lastname', models.CharField(max_length=60)),
                ('contact', models.CharField(max_length=60)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=60)),
            ],
            options={
                'db_table': 'Users',
            },
        ),
        migrations.DeleteModel(
            name='CheckIn',
        ),
    ]
