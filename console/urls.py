#coding=utf-8
from django.conf.urls import patterns, url
from console.views import dashboard,explore
urlpatterns = patterns('',
    url(r'^console/$',dashboard.main,name='console'),
    url(r'^dashboard/$',dashboard.main),
    url(r'^console/dashboard/$',dashboard.dashboard,name='dashboard'),
    url(r'^console/dashboard/feeds/$',dashboard.feeds,name='ds_feeds'),
    url(r'^console/dashboard/tasks/$',dashboard.tasks,name='ds_tasks'),
    url(r'^console/dashboard/contributes/$',dashboard.contributes,name='ds_contributes'),
)

urlpatterns += patterns('',
           url(r'^explore/$',dashboard.main),
           url(r'^explore/tasks/(\w+)$',dashboard.main),
           url(r'^console/explore$',explore.explore,name='explore'),
           url(r'^console/explore/position$',explore.position,name='position'),
           url(r'^console/explore/tasks/detail$',explore.taskDetail,name='taskDetail'),
)