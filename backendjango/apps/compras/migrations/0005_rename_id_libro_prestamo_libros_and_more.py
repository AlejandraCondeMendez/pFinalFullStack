# Generated by Django 5.1.1 on 2024-10-28 19:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0004_rename_fecha_final_prestamo_fecha_prestamo_final_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prestamo',
            old_name='id_libro',
            new_name='libros',
        ),
        migrations.RenameField(
            model_name='prestamo',
            old_name='id_usuario',
            new_name='usuario',
        ),
    ]