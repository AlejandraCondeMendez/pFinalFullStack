from django.shortcuts import render
from rest_framework import generics
from .serializer import PostSerializer
from .models import Libros
# Create your views here.

class LibroView(generics.ListCreateAPIView):
    queryset = Libros.objects.all()
    serializer_class = PostSerializer

class LibroGetView(generics.ListAPIView): 
    serializer_class = PostSerializer
    lookup_field = 'usuarioLibro' # lookup va a buscar el campo usuarioLibro en la BD

    def get_queryset(self): #método de django
        usuario_libro = self.kwargs.get(self.lookup_field) #kwargs: el campo usuarioLibro sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(usuarioLibro=usuario_libro)
# RetrieveAPIView: ID (GET).




