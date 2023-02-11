from django.db import models
from stores.models import Store
import uuid


class Transaction(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    type = models.IntegerField()
    date = models.DateField()
    value = models.DecimalField(decimal_places=2, max_digits=10)
    cpf = models.CharField(max_length=11)
    card = models.CharField(max_length=12)
    time = models.TimeField(max_length=5)
    owner = models.CharField(max_length=14)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
