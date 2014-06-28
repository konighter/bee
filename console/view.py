from django.http import HttpResponse
from django.shortcuts import  render_to_response


# Create your views here.
from django.template import RequestContext


def cosole_main(request):
    return render_to_response('console/base_layout.html',RequestContext(request))


def task(request):
    return HttpResponse( {'key':'valeu'})

