from django.shortcuts import render
from rest_framework import generics
from apps.libros.serializer import PostSerializer
from apps.libros.models import Libros
# Create your views here.

class LibroView(generics.ListaCreateAPIView):
    queryset = Libros
    serializer = PostSerializer
    
    
    
    


