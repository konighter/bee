from django.shortcuts import  render_to_response

# Create your views here.

def index(request):
    return render_to_response('site/home.html',{'poll':'234234'})

def position(request):
    return render_to_response('site/position.html',{'poll':'234234'})