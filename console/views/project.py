
__author__ = 'carvee'

from django.shortcuts import render_to_response
from django.template import RequestContext

def main(request,*args,**kwargs):
    return render_to_response('console/project/project.html',RequestContext(request))

def project_positions(request,*args,**kwargs):
    return render_to_response('console/project/project_positions.html',RequestContext(request))







def tpl_position_slide(request,*args,**kwargs):
    return render_to_response('console/project/tpl/position.html',RequestContext(request))
