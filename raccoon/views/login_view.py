#coding=utf-8
'''
Created on 2014年6月25日

@author: carvee
'''
from django.http import  HttpResponseRedirect
from django.shortcuts import  render_to_response
from django.contrib.auth import authenticate, login
from django.views.generic import View

class LoginView(View):
    '''
    classdocs
    '''
    def get(self,*args,**kwargs):
        print args
        return render_to_response('site/login.html')
    
    def post(self,request,*args,**kwargs):
        print request.POST.get('key_username')
        
        user = authenticate(username=request.POST.get('key_username'),password=request.POST.get('key_pwd'))
        print user
        return HttpResponseRedirect('/');