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
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

# Se crea la view de registro, acá se va a manejar la lógica 
# La APIView maneja peticiones HTTP (get, post)
# la view se pone en el url y esta url se conecta con frontend
# re.match: intenta hacer coincidir un patrón con el inicio de una cadena de texto. Si encuentra 
# una coincidencia, devuelve un objeto Match. Si no encuentra coincidencia al inicio de la cadena, devuelve None.

class RegistroView(APIView):
    permission_classes = [AllowAny] # AllowAny permite acceso abierto a una vista sin requerir autenticación
    def post(self, request):
        usuario_registro = request.data.get('username') #path_user
        contrasena_registro = request.data.get('password') #path_use
        correo_registro = request.data.get('email') #path_user
        tel_registro = request.data.get('telefono') #Registro
        ubi_registro = request.data.get('ubicacion') #Registro
        
        
    # Validaciones para el registro
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
    permission_classes = [AllowAny]

    def post(self, request):
        usuarioLogin = request.data.get('usernameFront') # obtiene el valor de 'username' de los datos enviados del frontend
        contrasenaLogin = request.data.get('passwordFront')
        
        userDatos = authenticate(request, username=usuarioLogin, password=contrasenaLogin)
        
        if userDatos is not None:
            refresh = RefreshToken.for_user(userDatos) # crea el token para el usuario
            token, created = Token.objects.get_or_create(user=userDatos) # user contiene el nuevo_usuario, va a iniciar sesión si coinciden
            return Response({'success': "Usuario valido", 'id': userDatos.id,'token_acceso':str(refresh.access_token),'token_refresco':str(refresh)}, status=status.HTTP_200_OK)
        #la respuesta a la solicitud HTTP es enviar el menssaje de succes y también en esta respuesta se incluye el ID, esto para almacenar el ID del usuario que inicio sesión.
        else:
            return Response({'falso': 'Credenciales inválidas'}, status=status.HTTP_400_BAD_REQUEST)
    
# Los Token es la manera en la se autentica un usuario, generando una secuencia de #s únicos 
# HTTP 200 la petición fue correcta (se logró conectar)
# access_token : da el token de acceso del usuario - es la autenticación, permite el acceso
# refresh_token : da el token de refresco, utilizado para obtener nuevos tokens de acceso


# guardar en una cookie los tokens (acceso y refresco)
# que se expire rápido el token de acceso y el de refresco no

# el más seguro: en lugar de guardarlas en una cookie, las de refreso se guardan en el backend (cookie)
# views privatizadas, que ocupen el token para ser usadas