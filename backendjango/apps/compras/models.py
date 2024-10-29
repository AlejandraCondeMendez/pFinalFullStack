from django.db import models

# Create your models here.
class Compras(models.Model):
    libros_compra = models.ManyToManyField('libros.Libros', related_name='compras_carrito') # many to many (un comprador puede tener muchos libros)
    usuario_compra = models.ForeignKey('usuarios.Registro', on_delete=models.CASCADE, related_name='compras_usuario')
    fecha_compra = models.DateField(auto_now=True)
    libro_precio_total = models.IntegerField(default=0.0)
    
    class Meta:
        db_table = 'compra_compracarrito'
        
        
class Prestamo(models.Model):
    libros_prestamo= models.ForeignKey('libros.Libros', on_delete=models.CASCADE, related_name='prestamo_compra')
    usuario_prestamo = models.ForeignKey('usuarios.Registro', on_delete=models.CASCADE, related_name='usuario_prestamo')
    fecha_prestamo_inicio = models.DateField()
    fecha_prestamo_final = models.DateField()
    estado = models.BooleanField('Estado prestamo', default=False)