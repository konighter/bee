from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from raccoon.views.login_view import LoginView
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'raccoon.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^', include('bee.urls',namespace='bee')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', LoginView.as_view() , name='login'),
) + staticfiles_urlpatterns()


print urlpatterns