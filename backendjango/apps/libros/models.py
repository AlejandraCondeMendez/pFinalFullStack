from django.db import models

# Create your models here.
class Libros(models.Model):
    titulo = models.TextField()
    usuarioLibro = models.ForeignKey("usuarios.Registro", on_delete=models.CASCADE, related_name='usuario_id',default=11)
    autor = models.CharField(max_length=30)
    estado = models.CharField(max_length=30)
    categoria = models.CharField(max_length=30)
    ubicacion = models.CharField(max_length=30)