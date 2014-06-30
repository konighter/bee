from django.views.generic import View
from console.models import Menu

__author__ = 'carvee'

class Menuboard(View):

    def get(self, request, *args, **kwargs):
        type = request.GET['type']
        belong_to = request.GET['belongTo']

        result = Menu.objects.filter(type=type, belongTo = belong_to)

