from rest_framework import serializers
from .models import Compras
from .models import Prestamo
from ..libros.serializer import LibroSerializer 

class ComprasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compras
        fields = '__all__'
        
# class PrestamoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Prestamo
#         fields = '__all__'

class PrestamoSerializer(serializers.ModelSerializer):
    libro = LibroSerializer(source='libros_prestamo',read_only=True)
    class Meta:
        model = Prestamo
        fields = ['id','libro','usuario_prestamo','fecha_prestamo_inicio','fecha_prestamo_final','estado']