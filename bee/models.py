#coding=utf-8
from django.db import models
from django.contrib.auth.models import AbstractUser

class Resume(models.Model):
    id = models.BigIntegerField(primary_key=True)
    url = models.CharField(max_length=500, blank=True)
    class Meta:
        db_table = 'tbl_resume'

class Candidate(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    qq = models.CharField(max_length=20, blank=True)
    degree = models.CharField(max_length=10, blank=True)
    school = models.CharField(max_length=50, blank=True)
    onjob = models.BooleanField(blank=True)
    input_date = models.DateTimeField()
    
    resume = models.ForeignKey(Resume)
    
    class Meta:
        db_table = 'tbl_candidate'
 

class Position(models.Model):
    name   = models.CharField(max_length=50)
    classify   = models.CharField(max_length=50) # 开发/测试/运维/产品/管理/高管
    base   = models.CharField(max_length=50)
    jobtype= models.CharField(max_length=50) #全职/兼职/实习
    experience_required = models.CharField(max_length=50)
    degree_required     = models.CharField(max_length=50)
    office_address      = models.CharField(max_length=200)
    achieve_email       = models.CharField(max_length=200)
    description         = models.TextField()
    keywords            = models.CharField(max_length=200)
    create_date = models.DateTimeField()
    publish_date = models.DateTimeField()
    update_date = models.DateTimeField()
    
    candidates = models.ManyToManyField(Candidate,db_table='tbl_candidate_positon')
    
    class Meta:
        db_table = 'tbl_position'

class Hunter(models.Model):
    name = models.CharField(max_length=50)
    qq   = models.CharField(max_length=50)
    email= models.EmailField()
    phone= models.CharField(max_length=50)
    level= models.CharField(max_length=2)
    tags = models.CharField(max_length=200)
    sts  = models.CharField(max_length=2)
    reg_date = models.DateTimeField()
    
    positions = models.ManyToManyField(Position,db_table='tbl_hunter_position')
    
    class Meta:
        db_table = 'tbl_hunter'
   
   



class PositionTrace(models.Model):
    positon = models.ForeignKey(Position)
    operator_id = models.BigIntegerField()
    operator_type = models.CharField(max_length=20)
    operation = models.CharField(max_length=200)
    update_date = models.DateTimeField()
    class Meta:
        db_table = 'tbl_position_trace'
        

class Customer(models.Model):
    name = models.CharField(max_length=100)
    industy = models.CharField(max_length=100)
    contact = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    address = models.CharField(max_length=200, blank=True)
    cust_service = models.CharField(max_length=200, blank=True)
    level = models.CharField(max_length=1)
    sts = models.CharField(max_length=1)
    reg_date = models.DateTimeField()
    class Meta:
        db_table = 'tbl_customer'
        
class Staff(AbstractUser):
    phone    = models.CharField(max_length=50, blank=True)
    class Meta:
        db_table = 'tbl_staff'