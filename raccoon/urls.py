from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from django.shortcuts import render_to_response
from raccoon.views import login_view, signin_view , logout_view
admin.autodiscover()

def test(request):
    return render_to_response('test.html')

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'raccoon.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include('console.urls',namespace='console')),
    url(r'^', include('bee.urls',namespace='bee')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', login_view.LoginView.as_view() , name='login'),
    url(r'^logout/$', logout_view.logout_view, name='logout'),
    url(r'^join/$', signin_view.SigninView.as_view() , name='join'),
    url(r'^test/$', test , name='join'),
) + staticfiles_urlpatterns()


print urlpatterns