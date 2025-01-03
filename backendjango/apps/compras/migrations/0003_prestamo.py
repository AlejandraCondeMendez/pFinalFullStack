# Generated by Django 5.1.1 on 2024-10-28 15:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0002_rename_id_libro_compras_id_libros'),
        ('libros', '0006_libros_precio'),
        ('usuarios', '0002_alter_registro_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_inicio', models.DateField()),
                ('fecha_final', models.DateField()),
                ('estado', models.BooleanField(default=False, verbose_name='Estado prestamo')),
                ('id_libro', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prestamo_compra', to='libros.libros')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usuario_prestamo', to='usuarios.registro')),
            ],
        ),
    ]
