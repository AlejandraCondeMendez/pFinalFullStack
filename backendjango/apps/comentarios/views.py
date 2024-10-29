from django.shortcuts import render
from rest_framework import generics
from .models import Comentarios
from .serializer import ComentarioSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

#esta vista permita que pueda agregar comentarios con un usuario específico y a un libro específico
class ComentariosViews(generics.ListCreateAPIView): #get y post
    queryset = Comentarios.objects.all()
    serializer_class = ComentarioSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    
# Todos los comentarios, según el ID del libro (libro_comentario)
class ComentariosIDViews(generics.ListAPIView):
    serializer_class = ComentarioSerializer 
    lookup_field = 'libro_comentario'
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def get_queryset(self):
        libro_comentario = self.kwargs.get(self.lookup_field)
        return Comentarios.objects.filter(libro_comentario = libro_comentario)