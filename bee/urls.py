from django.conf.urls import patterns, url
from bee import views

urlpatterns = patterns('',
    url(r'^$', views.index,name='index'),
    url(r'^positon/$',views.position , name='position'), 
    url(r'^company/$',views.company, name='company'), 
    url(r'^company/(?P<company_id>\d+)/$',views.company_info, name='company_info'), 
)