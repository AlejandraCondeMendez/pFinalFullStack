from django.db import models

# Create your models here.
class Compras(models.Model):
    id_libros = models.ManyToManyField('libros.Libros', related_name='compras_carrito') # many to many (un comprador puede tener muchos libros)
    id_usuario = models.ForeignKey('usuarios.Registro', on_delete=models.CASCADE, related_name='compras_usuario')
    libro_precio = models.IntegerField(default=0.0)
    fecha_compra = models.DateField(auto_now=True)
    
    class Meta:
        db_table = 'compra_compracarrito'