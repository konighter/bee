from django.db.models.query import QuerySet

__author__ = 'carvee'

import json
from django.core import serializers

def models_to_json(model):
     if isinstance(model, QuerySet ) :
        result = []
        for m in model :
            result.append(dict([(attr, getattr(m, attr)) for attr in [f.name for f in m._meta.fields]]))
        return json.dumps(result)
     else :
        return json.dumps(dict([(attr, getattr(model, attr)) for attr in [f.name for f in model._meta.fields]]))

