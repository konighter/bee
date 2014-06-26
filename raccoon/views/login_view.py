#coding=utf-8
'''
Created on 2014年6月25日

@author: carvee
'''

from django.http import  HttpResponseRedirect
from django.shortcuts import  render_to_response
from django.contrib.auth import authenticate, login
from django.core.urlresolvers import reverse
from django.views.generic import View

class LoginView(View):
    '''
    classdocs
    '''
    def get(self,request, *args,**kwargs):
        return render_to_response('site/login.html')
    
    def post(self,request,*args,**kwargs):
        
        user = authenticate(username=request.POST.get('key_username'),password=request.POST.get('key_pwd'))
        if user is not None :
            if user.is_active :
                login(request,user)
                if not request.POST.get('fixme',None):
                    request.session.set_expiry(0)
                return HttpResponseRedirect(reverse('bee:index'));
        else :
            return render_to_response('site/login.html',{'error':True,'msg':'用户名密码错误,请重试!'});
        