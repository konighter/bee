#coding=utf-8
from django.conf.urls import patterns, url
from console import views

urlpatterns = patterns('',
    url(r'^$', views.cosole_main,name='main'),
)