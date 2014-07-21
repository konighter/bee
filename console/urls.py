#coding=utf-8
from django.conf.urls import patterns, url
from console.views import dashboard,explore,resume ,project

#dashboard
urlpatterns = patterns('',

    url(r'^console/dashboard/$',dashboard.dashboard,name='dashboard'),
    url(r'^console/dashboard/feeds/$',dashboard.feeds,name='ds_feeds'),
    url(r'^console/dashboard/tasks/$',dashboard.tasks,name='ds_tasks'),
    url(r'^console/dashboard/contributes/$',dashboard.contributes,name='ds_contributes'),
)

#发现
urlpatterns += patterns('',

    url(r'^console/explore$',explore.explore,name='explore'),
    url(r'^console/explore/position$',explore.position,name='position'),
    url(r'^console/explore/tasks/detail$',explore.taskDetail,name='taskDetail'),
)

# 简历管理
urlpatterns += patterns('',
    url(r'^console/resumes$',resume.main,name='resumes'),
    url(r'^console/resume/(\w+)$',resume.resume_detail,name='resume_detail'),
)

# 简历管理
urlpatterns += patterns('',
    url(r'^console/projects$',project.main,name='projects'),
)


# 首页
urlpatterns += patterns('',
    url(r'^console/$',dashboard.main),
    url(r'^dashboard/$',dashboard.main),
    url(r'^explore/$',dashboard.main),
    url(r'^resumes/$',dashboard.main),
    url(r'^resume/(\w+)$',dashboard.main),
    url(r'^projects$',dashboard.main),
)