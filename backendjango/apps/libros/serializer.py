from rest_framework import serializers
from .models import Libros

class PostSerializer(serializers.ModelSerializer):
    usuarioLibro = serializers.CharField(source='usuarioLibro.user.username', read_only=True)
    class Meta:
        model = Libros
        fields = ['titulo', 'autor', 'estado', 'categoria', 'ubicacion','usuarioLibro']
