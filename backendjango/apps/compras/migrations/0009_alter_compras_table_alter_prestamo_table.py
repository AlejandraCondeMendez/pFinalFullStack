# Generated by Django 5.1.1 on 2024-10-30 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0008_rename_libro_precio_compras_libro_precio_total'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='compras',
            table='libro_compra',
        ),
        migrations.AlterModelTable(
            name='prestamo',
            table='libro_prestamo',
        ),
    ]