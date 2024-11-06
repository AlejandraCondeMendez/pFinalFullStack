from django.shortcuts import render
from rest_framework import generics
from .models import Compras, Prestamo
from .serializer import ComprasSerializer
from .serializer import PrestamoSerializer
from rest_framework.permissions import AllowAny
#ocupamos hacer un post y un get de los libros en la página carrito
class ComprasViews(generics.ListCreateAPIView):
    queryset = Compras.objects.all() #qué queremos agarrar
    serializer_class = ComprasSerializer #qué campos necesitamos
    
class PrestamoViews(generics.ListCreateAPIView):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
    
class PrestamosUsuarioView(generics.ListAPIView): #get de libros prestamos
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer
    lookup_field = 'usuario_prestamo'

    def get_queryset(self):
        usuario_prestamo = self.kwargs.get(self.lookup_field)
        return Prestamo.objects.filter(usuario_prestamo=usuario_prestamo).select_related('libros_prestamo')
