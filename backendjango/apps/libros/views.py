from django.shortcuts import render
from rest_framework import generics
from .serializer import LibroSerializer
from .models import Libros
from django.db.models import Q


# Create your views here.
# hacer el token y guardarlo en cookie (definir cuanto dura o sesiones), en el backend buscar que las views
# todo el resto de views verifiquen que exista el token. sección de seguridad, los endpoints no pueden ser utilizados sin un token de usuario
# sirve para mantener la sesión iniciada
# 21 de octubre (avance II - autenticaciones)

class LibroView(generics.ListCreateAPIView):
    queryset = Libros.objects.all()
    serializer_class = LibroSerializer

class LibroGetView(generics.ListAPIView): # hace un get según el ID
    serializer_class = LibroSerializer
    lookup_field = 'usuarioLibro' # lookup va a buscar el campo usuarioLibro en la BD
    
    def get_queryset(self): #método de django
        usuario_libro = self.kwargs.get(self.lookup_field) #kwargs: el campo usuarioLibro sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(usuarioLibro=usuario_libro)

class LibroDeleteView(generics.DestroyAPIView):
    queryset = Libros.objects.all()
    serializer_class = LibroSerializer
    lookup_field = 'id' 

class LibroPutView(generics.UpdateAPIView):
    queryset = Libros.objects.all()
    serializer_class = LibroSerializer
    lookup_field = 'id' 
    
# View que sirve en el frontend para traer los libros según su ID
class LibroIDView(generics.ListAPIView):
    serializer_class = LibroSerializer
    lookup_field = 'id' # lookup va a buscar el campo id en la BD
    
    def get_queryset(self): #método de django
        id = self.kwargs.get(self.lookup_field) #kwargs: el campo id sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(id=id)
    
class LibroCateView(generics.ListAPIView):
    serializer_class = LibroSerializer
    lookup_field = 'categoria' # lookup va a buscar el campo categoria en la BD
    
    def get_queryset(self): #método de django
        categoria = self.kwargs.get(self.lookup_field) #kwargs: el campo categoria sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(categoria=categoria) 

class LibroEstadoView(generics.ListAPIView):
    serializer_class = LibroSerializer
    lookup_field = 'estado' # lookup va a buscar el campo estado en la BD (vente - intercambio)
    
    def get_queryset(self): #método de django
        estado = self.kwargs.get(self.lookup_field) #kwargs: el campo categoria sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(estado=estado)


# View para la barra de búsqueda
class LibroBusquedaView(generics.ListAPIView):
    serializer_class = LibroSerializer
    
    def get_queryset(self):
        query = self.request.query_params.get('q')
        if query:
            return Libros.objects.filter(
                Q(autor__icontains=query)|
                Q(titulo__icontains=query)|
                Q(usuarioLibro__user__username__icontains=query)|
                Q(estado__icontains=query)|
                Q(categoria__icontains=query)|
                Q(ubicacion__icontains=query)
            )