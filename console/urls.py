#coding=utf-8
from django.conf.urls import patterns, url
from console import view
from console.views import menu_view

urlpatterns = patterns('',
    url(r'^$', view.cosole_main,name='main'),
    # url(r'^dashboard$', views.,name='main'),
    url(r'^task/$',view.task,name='task'),
)