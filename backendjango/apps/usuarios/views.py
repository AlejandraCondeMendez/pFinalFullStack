from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from apps.usuarios.models import Registro 
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from apps.libros.models import Libros
import re

# Se crea la view de registro, acá se va a manejar la lógica 
# La APIView maneja peticiones HTTP (get, post)
# la view se pone en el url y esta url se conecta con frontend
# re.match: intenta hacer coincidir un patrón con el inicio de una cadena de texto. Si encuentra 
# una coincidencia, devuelve un objeto Match. Si no encuentra coincidencia al inicio de la cadena, devuelve None.

class RegistroView(APIView):
    def post(self, request):
        usuario_registro = request.data.get('username')
        contrasena_registro = request.data.get('password')
        correo_registro = request.data.get('email')
        tel_registro = request.data.get('telefono')
        ubi_registro = request.data.get('ubicacion')
        
        usuario_regex= r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{1,10}$'
        contra_regex = r'(?P<password>((?=\S*[A-Z])(?=\S*[a-z])(?=\S*\d)(?=\S*[\!\"\§\$\%\&\/\(\)\=\?\+\*\#\'\^\°\,\;\.\:\<\>\ä\ö\ü\Ä\Ö\Ü\ß\?\|\@\~\´\`\\])\S{8,}))'
        correo_regex = r'^[a-zA-Z0-9._%+-]+@gmail\.com$'
        tele_regex = r'^[6789]\d{7}$'
        ubi_regex= r'^[A-Z][a-zA-Z\s,.]{0,19}$'
    
    # Validación de la contraseña: se usa la expresión regular para verificar que la contrasena_registro cumpla con
    # con el patrón regex.
    # HTTP 400: solicitud inválida
        if not re.match(usuario_regex, usuario_registro):
            return Response({'falso': 'Usuario inválido'}, status=status.HTTP_400_BAD_REQUEST)
        if not re.match(contra_regex, contrasena_registro):
            return Response({'falso': 'Contraseña inválida'}, status=status.HTTP_400_BAD_REQUEST)
        if not re.match(correo_regex, correo_registro):
            return Response({'falso': 'Correo invalido'}, status=status.HTTP_400_BAD_REQUEST)
        if not re.match(tele_regex, tel_registro):
            return Response({'falso': 'Teléfono invalido'}, status=status.HTTP_400_BAD_REQUEST)
        if not re.match(ubi_regex, ubi_registro):
            return Response({'falso': 'Ubicación inválida'}, status=status.HTTP_400_BAD_REQUEST)
        
        
    # si ambos usuarios son iguales, ya existe, por ende no va a dejar crear un nuevo usuario
        if User.objects.filter(username = usuario_registro).exists():
            return Response({'falso': 'Usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
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
            return Response({'falso': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
    
# Los Token es la manera en la se autentica un usuario, generando una secuencia de #s únicos 
# HTTP 200 la petición fue correcta (se logró conectar)