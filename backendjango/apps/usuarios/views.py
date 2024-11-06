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
from rest_framework.permissions import AllowAny, IsAuthenticated

# Se crea la view de registro, acá se va a manejar la lógica 
# La APIView maneja peticiones HTTP (get, post)
# la view se pone en el url y esta url se conecta con frontend
# re.match: intenta hacer coincidir un patrón con el inicio de una cadena de texto. Si encuentra 
# una coincidencia, devuelve un objeto Match. Si no encuentra coincidencia al inicio de la cadena, devuelve None.

# Esta view se creé para rgistrar un nuevo usuario validando la información antes de crearlo
class RegistroView(APIView):
    permission_classes = [AllowAny] # AllowAny permite acceso abierto a una vista sin requerir autenticación
    def post(self, request):
        usuario_registro = request.data.get('username') # obtiene el valores de los datos enviados desde frontend
        contrasena_registro = request.data.get('password') 
        correo_registro = request.data.get('email') 
        tel_registro = request.data.get('telefono') 
        ubi_registro = request.data.get('ubicacion') 
        
        
    # Validaciones para el registro - EXPRESIONES REGULARES
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
            # si los datos nos válidos crea un nuevo usuario y guarda los datos en el model de Registro
            Registro.objects.create(
                user = nuevo_usuario,
                telefono = tel_registro,
                ubicacion = ubi_registro
            )
            
            return Response({'success': 'Usuario creado'}, status=status.HTTP_201_CREATED)
               
# Esta view la creé para utenticar a un usuario existente (debe estar accesible) y generar un token de acceso para el inicio de sesión
class InicioSesionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        usuarioLogin = request.data.get('usernameFront') # obtiene el valor de 'username' de los datos enviados desde frontend
        contrasenaLogin = request.data.get('passwordFront')
        
        userDatos = authenticate(request, username=usuarioLogin, password=contrasenaLogin) #verifica que el nombre de usuario y contraseña sean correctos
        
        if userDatos is not None:
            telefono = Registro.objects.get(user=userDatos).telefono
            ubicacion = Registro.objects.get(user=userDatos).ubicacion
            
            refresh = RefreshToken.for_user(userDatos) # crea el token para el usuario
            return Response({'success': "Usuario valido",'correo':userDatos.email,'telefono': telefono, 'ubicacion': ubicacion,'nombre':userDatos.username ,'id': userDatos.id,'token_acceso':str(refresh.access_token),'token_refresco':str(refresh)}, status=status.HTTP_200_OK)
        # envía info del usuario junto con los tokens si la autenticación es exitosa
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

# Esta views las creé para que el usuario autenticado cambie su contraseña y nombre de usuario actuales
class CambioContraView(APIView):
    permission_classes = [IsAuthenticated] # lo usé para asegurar que solo los usuario ya autenticados puedan actualizar la contraseña y nombre de usuario
    queryset = User.objects.all()
    
    def get_object(self): #recupera un objeto en específico, el usuario autenticado
        return self.request.user 
    
    def patch(self, request): #referencia, petición - petición de la referencia
        usuarioIniciado = self.get_object() # el usuario de la función get_object
        
        clave_actual = request.data.get('contra_actual')
        clave_nueva = request.data.get('contra_nueva')
        
        # comprobar que la contraseña actual coincida con la actual en el sistema
        usuarioDatos = authenticate(request, username=usuarioIniciado.username, password=clave_actual) 
        
        if usuarioDatos is None:
            return Response({'falso': 'No es la contraseña correcta'}, status=status.HTTP_400_BAD_REQUEST)
        
        contra_regex = r'(?P<password>((?=\S*[A-Z])(?=\S*[a-z])(?=\S*\d)(?=\S*[\!\"\§\$\%\&\/\(\)\=\?\+\*\#\'\^\°\,\;\.\:\<\>\ä\ö\ü\Ä\Ö\Ü\ß\?\|\@\~\´\`\\])\S{8,}))' 
        if not re.match(contra_regex, clave_nueva):
            return Response({'falso':'La contraseña no cumple con lo requerido'}, status=status.HTTP_400_BAD_REQUEST)
        
        usuarioIniciado.set_password(clave_nueva) #actualiza la contraseña
        usuarioIniciado.save() # se guarda la nueva contraseña en la BD
        return Response({'verdadero': 'La contraseña se actualizó'}, status=status.HTTP_200_OK)
    
    
class CambioNombreView(APIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    
    def get_object(self):
        return self.request.user
    
    def patch(self, request):
        usuarioIniciado = self.get_object()
        
        nombre_actual = request.data.get('nombreUsuario_actual')
        nombre_nuevo = request.data.get('nombreUsuario_nuevo')
                
        if nombre_actual != usuarioIniciado.username:
            return Response({'Falso':'El nombre de usuario no es el correcto'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=nombre_nuevo).exists():
            return Response({'Falso': 'El nombre de usuario ya existe'}, status=status.HTTP_400_BAD_REQUEST)
        
        usuarioIniciado.username = nombre_nuevo
        usuarioIniciado.save()
        
        return Response({'verdadero': 'El usuario se actualizó'})