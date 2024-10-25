from django.db import models

class Comentarios(models.Model):
    libro_comentario = models.ForeignKey('libros.Libros',on_delete=models.CASCADE, related_name='comentario_libro')
    usuario_comentario = models.ForeignKey('usuarios.Registro', on_delete=models.CASCADE, related_name='comentario_usuario')
    fecha_hora_comentario = models.DateTimeField(auto_now=True)
    estrellas_comentario = models.IntegerField(default=0)
    texto_comentario = models.CharField(max_length=200)
    def __str__(self):
        return {f"El usaurio {self.usuario_comentario} hizo el comentario {self.texto_comentario}"}