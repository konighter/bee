import json
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import  render_to_response


# Create your views here.

from django.template import RequestContext
from console.models import Menu
from console.utils import models_to_json


@login_required
def cosole_main(request):
    return render_to_response('console/base_layout.html',RequestContext(request))

@login_required
def dashboard(request):
    return render_to_response('console/dashboard/dashboard.html',RequestContext(request))


def menus(request):
    menus = Menu.objects.filter(type=request.GET['type'],belongTo=request.GET['belongTo'])
    result = models_to_json(menus)
    print result
    return HttpResponse(result)