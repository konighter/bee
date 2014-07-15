__author__ = 'carvee'

from django.shortcuts import render_to_response
from django.template import RequestContext

def main(request,*args,**kwargs):
    return render_to_response('console/resume/resume.html',RequestContext(request))

def resume_detail(request,resumeId,*args,**kwargs):
    return render_to_response('console/resume/resume_detail.html',RequestContext(request))