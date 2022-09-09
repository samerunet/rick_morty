from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=32)
    industry = models.IntegerField()
    properties = models.CharField(max_length=32)