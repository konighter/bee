from django.shortcuts import render_to_response
from django.template import RequestContext

__author__ = 'carvee'

def main(request):
    return render_to_response('console/console.html',RequestContext(request))

def dashboard(request):
    return render_to_response('console/dashboard/dashboard.html',RequestContext(request))

def feeds(request):
    return render_to_response('console/dashboard/ds_feeds.html',RequestContext(request))

def tasks(request):
    return render_to_response('console/dashboard/ds_tasks.html',RequestContext(request))

def contributes(request):
    return render_to_response('console/dashboard/ds_contributes.html',RequestContext(request))

def position(request,position_id):
    return render_to_response('console/position/position_detail.html',RequestContext(request))

