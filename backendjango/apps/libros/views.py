from django.shortcuts import render
from rest_framework import generics
from .serializer import PostSerializer
from .models import Libros
# Create your views here.

class LibroView(generics.ListCreateAPIView):
    queryset = Libros.objects.all()
    serializer_class = PostSerializer
    # def get_queryset(self):
    #     return Libros.objects.select_related('usuarioLibro__user').all()
    
    # def get(self, request, *args, **kwargs):
    #     return super().get(request, *args, **kwargs)

    


