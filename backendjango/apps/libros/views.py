from django.shortcuts import render
from rest_framework import generics
from .serializer import PostSerializer
from .models import Libros
from rest_framework.permissions import IsAuthenticated

# Create your views here.
# hacer el token y guardarlo en cookie (definir cuanto dura o sesiones), en el backend buscar que las views
# todo el resto de views verifiquen que exista el token. sección de seguridad, los endpoints no pueden ser utilizados sin un token de usuario
# sirve para mantener la sesión iniciada
# 21 de octubre (avance II - autenticaciones)

class LibroView(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated] #para que se muestren los libros una vez el usuario se autenticó iniciando sesión, es decir requiere que el usuario este auntenticado para acceder
    queryset = Libros.objects.all()
    serializer_class = PostSerializer

class LibroGetView(generics.ListAPIView): # hace un get según el ID
    serializer_class = PostSerializer
    lookup_field = 'usuarioLibro' # lookup va a buscar el campo usuarioLibro en la BD
    
    def get_queryset(self): #método de django
        usuario_libro = self.kwargs.get(self.lookup_field) #kwargs: el campo usuarioLibro sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(usuarioLibro=usuario_libro)

class LibroDeleteView(generics.DestroyAPIView):
    queryset = Libros.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id' 

class LibroPutView(generics.UpdateAPIView):
    queryset=Libros.objects.all()
    serializer_class=PostSerializer
    lookup_field = 'id' 
    

class LibroIDView(generics.ListAPIView):
    serializer_class = PostSerializer
    lookup_field = 'id' # lookup va a buscar el campo id en la BD
    
    def get_queryset(self): #método de django
        id = self.kwargs.get(self.lookup_field) #kwargs: el campo id sea igual a lo que tiene la URL (urls.py) // traéme el campo lookupfield
        return Libros.objects.filter(id=id)
    
    
    
        


