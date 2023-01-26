# Generated by Django 4.1.4 on 2023-01-24 14:17

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Transction",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("type", models.IntegerField()),
                ("date", models.DateField()),
                ("value", models.DecimalField(decimal_places=2, max_digits=10)),
                ("cpf", models.CharField(max_length=11)),
                ("card", models.CharField(max_length=12)),
                ("hour", models.CharField(max_length=5)),
                ("owner", models.CharField(max_length=14)),
                ("store", models.CharField(max_length=19)),
            ],
        ),
    ]