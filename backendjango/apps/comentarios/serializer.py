from rest_framework import serializers
from .models import Comentarios

#  convierte los objetos a un formato adecuado (probablemente JSON)
class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentarios
        fields ='__all__'