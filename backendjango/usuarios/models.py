from django.db import models

# Create your models here.
class Usuarios(models.Model):
    id = models.AutoField(primary_key=True)
    usuario =  models.CharField(max_length=100)
    correo = models.EmailField(max_length=100)
    contrasena = models.CharField(max_length=100)
    telefono = models.IntegerField()
    
    def __str__(self):
        return self.correo
    
class Adminsitrador(models.Model): 
    usuario = models.ForeignKey()