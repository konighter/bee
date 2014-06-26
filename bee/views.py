from django.shortcuts import  render_to_response
from django.template import RequestContext
# Create your views here.

def index(request):
    return render_to_response('site/home.html',context_instance=RequestContext(request))

def position(request):
    return render_to_response('site/position.html',context_instance=RequestContext(request))



def company(request):
    return render_to_response('site/company.html',context_instance=RequestContext(request))

def company_info(request,company_id):
    return render_to_response('site/company_info.html',context_instance=RequestContext(request))

def position_info(request, position_id):
    return render_to_response('site/position_info.html',context_instance=RequestContext(request))