from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from apps.usuarios.models import Registro

# Se crea la view de registro, acá se va a manejar la lógica 
# La APIView maneja peticiones HTPP (get, post)
# la view se pone en el url y esta url se conecta con frontend

class RegistroView(APIView):
    def post(self, request):
        usuario = request.data.get('username')
        contrasena = request.data.get('password')
        correo = request.data.get('email')
        tel = request.data.get('telefono')
        ubi = request.data.get('ubicacion')
    
    # si ambos usuarios son iguales, ya existe, por ende no va a dejar crear un nuevo usuario
        if User.objects.filter(username = usuario).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        else: 
            nuevo_usuario = User.objects.create_user(username=usuario, password=contrasena, email=correo)
            
            Registro.objects.create(
                user = nuevo_usuario,
                telefono = tel,
                ubicacion = ubi
            )
            
            return Response({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
               
        