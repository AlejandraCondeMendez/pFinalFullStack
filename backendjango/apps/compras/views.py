from django.shortcuts import render
from rest_framework import generics
from .models import Compras
from .serializer import ComprasSerializer

#ocupamos hacer un post y un get
class ComprasViews(generics.ListCreateAPIView):
    queryset = Compras.objects.all() #qué queremos agarrar
    serializer_class = ComprasSerializer #qué campos necesitamos
    
