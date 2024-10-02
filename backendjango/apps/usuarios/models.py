from django.db import models
from django.contrib.auth.models import User

# Creamos la tabla Registro, esta se verá en la base de datos
class Registro(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    telefono = models.CharField(max_length=20)
    ubicacion = models.CharField(max_length=100)
    
    

