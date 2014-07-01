import datetime
from django.db import models

# Create your models here.
from django.db import models


class Menu(models.Model):
    type     = models.CharField(max_length=4)
    title    = models.CharField(max_length=50)
    code     = models.CharField(max_length=50)
    url      = models.CharField(max_length=200)
    belongTo = models.CharField(max_length=50)
    index    = models.IntegerField()
    createDate = models.DateTimeField(default=datetime.datetime.now)
    status   = models.CharField(max_length=4)
    class Meta :
        db_table = 'tbl_menu'




