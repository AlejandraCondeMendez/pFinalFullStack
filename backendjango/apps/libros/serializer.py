from rest_framework import serializers
from .models import Libros

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libros
        fields = ['titulo', 'autor', 'estado', 'categoria', 'ubicacion','usuarioLibro']
