# Generated by Django 5.1.1 on 2024-10-25 16:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='compras',
            old_name='id_libro',
            new_name='id_libros',
        ),
    ]
