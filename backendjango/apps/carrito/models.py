from django.db import models

class Carrito(models.Model):
    comprador = models.ForeignKey('usuarios.Registro', related_name='comprador_carrito', on_delete=models.CASCADE)
    precio_total = models.FloatField(default=0.0)
    fecha_compra = models.DateField(auto_now=True)
    libro = models.ManyToManyField('libros.Libros', related_name='libro_carrito')
    
    class Meta:
        db_table = 'carrito_carritocompra'