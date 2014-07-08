from django.shortcuts import render_to_response
from django.template import RequestContext

__author__ = 'carvee'

def explore(request):
    return render_to_response('console/console.html',RequestContext(request))

def position(request):
    return render_to_response('console/position/position_detail.html',RequestContext(request))