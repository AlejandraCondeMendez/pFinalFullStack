from django.shortcuts import render
from rest_framework import generics
from .models import Comentarios
from .serializer import ComentarioSerializer

class ComentariosViews(generics.ListCreateAPIView):
    queryset = Comentarios.objects.all()
    serializer_class = ComentarioSerializer