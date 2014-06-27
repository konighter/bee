from django.shortcuts import  render_to_response
from django.template import RequestContext


# Create your views here.

def cosole_main(request):
    return render_to_response('console/base_layout.html',RequestContext(request))