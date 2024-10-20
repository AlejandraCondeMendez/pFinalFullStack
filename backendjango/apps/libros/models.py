from django.db import models

# Create your models here.
class Libros(models.Model):
    titulo = models.TextField()
    usuarioLibro = models.ForeignKey("usuarios.Registro", on_delete=models.CASCADE, related_name='usuario_id')
    autor = models.CharField(max_length=30)
    estado = models.CharField(max_length=30)
    categoria = models.CharField(max_length=30)
    ubicacion = models.CharField(max_length=30)
    precio = models.FloatField(default=0.0)
    
    def __str__(self):
        return self.titulo