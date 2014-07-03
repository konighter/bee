from django.shortcuts import render_to_response
from django.template import RequestContext

__author__ = 'carvee'

def main(request):
    return render_to_response('console/dashboard/dashboard.html',RequestContext(request))


def feeds(request):
    return render_to_response('console/dashboard/ds_feeds.html',RequestContext(request))