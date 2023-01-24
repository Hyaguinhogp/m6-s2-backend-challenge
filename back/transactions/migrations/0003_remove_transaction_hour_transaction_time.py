# Generated by Django 4.1.4 on 2023-01-24 17:54

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("transactions", "0002_rename_transction_transaction"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="transaction",
            name="hour",
        ),
        migrations.AddField(
            model_name="transaction",
            name="time",
            field=models.TimeField(default=django.utils.timezone.now, max_length=5),
            preserve_default=False,
        ),
    ]
