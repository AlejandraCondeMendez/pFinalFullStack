from django.db import models

class Destacados(models.Model):
    libro_destacado = models.ForeignKey('libros.Libros', on_delete=models.CASCADE, related_name='libros_destados')
    libro_calificacion = models.IntegerField(default=0)
    libro_fecha_calificacion = models.DateField(auto_now=True)
    
    class Meta:
        db_table = 'libro_destacados'
    
