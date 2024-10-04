from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from apps.usuarios.models import Registro 
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


# Se crea la view de registro, acá se va a manejar la lógica 
# La APIView maneja peticiones HTTP (get, post)
# la view se pone en el url y esta url se conecta con frontend

class RegistroView(APIView):
    def post(self, request):
        usuario_registro = request.data.get('username')
        contrasena_registro = request.data.get('password')
        correo_registro = request.data.get('email')
        
        tel_registro = request.data.get('telefono')
        ubi_registro = request.data.get('ubicacion')
    
    # si ambos usuarios son iguales, ya existe, por ende no va a dejar crear un nuevo usuario
        if User.objects.filter(username = usuario_registro).exists():
            return Response({'error': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        else: 
            nuevo_usuario = User.objects.create_user(username=usuario_registro, password=contrasena_registro, email=correo_registro)
            
            Registro.objects.create(
                user = nuevo_usuario,
                telefono = tel_registro,
                ubicacion = ubi_registro
            )
            
            return Response({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
               

class InicioSesionView(APIView):
    def post(self, request):
        usuarioLogin = request.data.get('username')
        contrasenaLogin = request.data.get('password')
        
        userDatos = authenticate(request, username=usuarioLogin, password=contrasenaLogin)
        
        if userDatos is not None:
            token, created = Token.objects.get_or_create(user=userDatos)
            return Response({'success': "Usuario valido"}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
    
# Los Token es la manera en la se autentica un usuario, generando una secuencia de #s únicos 
# HTTP 200 la petición fue correcta (se logró conectar)
# class UsuariosNombreView(APIView):
#     def get(self,request):
#         usuario = request.data.get('username')
#         usuario_id = Libros.objects.get("usuarioLibro_id")
        
#         usuario = User.objects.get()