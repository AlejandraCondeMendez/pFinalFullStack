# Generated by Django 5.1.1 on 2024-10-28 19:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0005_rename_id_libro_prestamo_libros_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prestamo',
            old_name='libros',
            new_name='libros_compra',
        ),
        migrations.RenameField(
            model_name='prestamo',
            old_name='usuario',
            new_name='usuario_compra',
        ),
    ]
