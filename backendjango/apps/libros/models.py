from django.db import models
from apps.usuarios.models import Registro
# Create your models here.
class Libros(models.Model):
    titulo = models.CharField(max_length=30)
    #usuarioLibro = models.ForeignKey(Registro, on_delete=models.CASCADE)
    autor = models.CharField(max_length=30)
    estado = models.CharField(max_length=30)
    castegoria = models.CharField(max_length=30)
    ubicacion = models.CharField(max_length=30)
    
    def __str__(self) -> str:
        return self.titulo