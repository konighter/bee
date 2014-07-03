#coding=utf-8
from django.conf.urls import patterns, url
from console import view
from console.views import dashboard
from console.views import menu_view

urlpatterns = patterns('',
    url(r'^console/$', view.cosole_main,name='main'),
    # url(r'^dashboard$', views.,name='main'),
    url(r'^dashboard/$',dashboard.main,name='dashboard'),
    url(r'^dashboard/feeds$',dashboard.feeds,name='dashboard'),
    url(r'^menus/$',view.menus,name='menus'),
)