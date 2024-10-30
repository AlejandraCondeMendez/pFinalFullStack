from rest_framework import serializers 
from .models import Destacados

class DestacadosSerializer(serializers.Serializer):
    class Meta:
        model = Destacados
        fields = '__all__'