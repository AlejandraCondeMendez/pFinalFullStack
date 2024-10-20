from django.shortcuts import render
from rest_framework import generics
from .models import Carrito
from .serializer import CarritoSerializer

class CarritoViews(generics.ListAPIView):
    queryset = Carrito.objects.all() #qué queremos agarrar
    serializer_class = CarritoSerializer #qué campos necesitamos
    