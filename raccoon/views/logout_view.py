from django.contrib.auth import logout
from django.http import HttpResponseRedirect

__author__ = 'carvee'

def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/')



