# Generated by Django 4.2.6 on 2023-10-11 17:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0006_users_delete_checkin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visits',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pages.users'),
        ),
    ]
