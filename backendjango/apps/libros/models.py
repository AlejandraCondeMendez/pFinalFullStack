from django.db import models

# Create your models here.
class Libros(models.Model):
    titulo = models.CharField(max_length=30)
    usuarioLibro = models.ForeignKey("usuarios.Registro", on_delete=models.CASCADE, related_name='usuario_id')
    autor = models.CharField(max_length=30)
    estado = models.CharField(max_length=30)
    categoria = models.CharField(max_length=30)
    ubicacion = models.CharField(max_length=30)
    
    def __str__(self) -> str:
        return self.titulo