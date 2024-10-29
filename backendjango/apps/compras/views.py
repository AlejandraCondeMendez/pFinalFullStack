from django.shortcuts import render
from rest_framework import generics
from .models import Compras, Prestamo
from .serializer import ComprasSerializer
from .serializer import PrestamoSerializer

#ocupamos hacer un post y un get
class ComprasViews(generics.ListCreateAPIView):
    queryset = Compras.objects.all() #qué queremos agarrar
    serializer_class = ComprasSerializer #qué campos necesitamos
    
class PrestamoViews(generics.ListCreateAPIView):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
