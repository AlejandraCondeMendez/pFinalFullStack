# Generated by Django 5.1.1 on 2024-10-25 16:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('libros', '0006_libros_precio'),
        ('usuarios', '0002_alter_registro_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Compras',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('libro_precio', models.IntegerField(default=0.0)),
                ('fecha_compra', models.DateField(auto_now=True)),
                ('id_libro', models.ManyToManyField(related_name='compras_carrito', to='libros.libros')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='compras_usuario', to='usuarios.registro')),
            ],
            options={
                'db_table': 'compra_compracarrito',
            },
        ),
    ]
