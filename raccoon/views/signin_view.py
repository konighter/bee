#coding=utf-8
'''
Created on 2014年6月26日

@author: carvee
'''
from django.http import  HttpResponseRedirect
from django.shortcuts import  render_to_response
from django.views.generic import View
from django.core.urlresolvers import reverse
from bee.models import Staff

class SigninView(View):


    def get(self, request, *args,**kwargs):
        return render_to_response('site/join.html')
    
    def post(self, request, *args,**kwargs):
        username = request.POST['cn_name']
        email    = request.POST['email']
        password = request.POST['password']
        
        Staff.objects.create_user(username, email, password)
        
        return HttpResponseRedirect(reverse('login'))
        