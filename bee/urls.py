from django.conf.urls import patterns, url
from bee import views

urlpatterns = patterns('',
    url(r'^$', views.index,name='index'),
    
)