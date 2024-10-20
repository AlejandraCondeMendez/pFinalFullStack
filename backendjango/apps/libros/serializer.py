from rest_framework import serializers
from .models import Libros

class LibroSerializer(serializers.ModelSerializer):
    usuarioLibro_nombre = serializers.CharField(source='usuarioLibro.user.username', read_only=True)
    class Meta:
        model = Libros
        fields = ['id', 'titulo', 'autor', 'estado', 'categoria', 'ubicacion', 'usuarioLibro', 'usuarioLibro_nombre', 'precio']

