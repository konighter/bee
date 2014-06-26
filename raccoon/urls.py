from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from raccoon.views import login_view, signin_view
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'raccoon.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include('bee.urls',namespace='bee')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', login_view.LoginView.as_view() , name='login'),
    url(r'^join/$', signin_view.SigninView.as_view() , name='join'),
) + staticfiles_urlpatterns()


print urlpatterns