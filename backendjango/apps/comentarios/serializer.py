from rest_framework import serializers
from .models import Comentarios

#  convierte los objetos a un formato adecuado (probablemente JSON)
class ComentarioSerializer(serializers.ModelSerializer):
    usuario_comenta = serializers.CharField(source='usuario_comentario.user.username', read_only = True)
    class Meta:
        model = Comentarios
        fields = ['libro_comentario', 'usuario_comentario', 'fecha_hora_comentario', 'estrellas_comentario', 'texto_comentario', 'usuario_comenta']
        