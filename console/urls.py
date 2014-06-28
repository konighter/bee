#coding=utf-8
from django.conf.urls import patterns, url
from console import view

urlpatterns = patterns('',
    url(r'^$', view.cosole_main,name='main'),
    url(r'^task/$',view.task,name='task'),
)