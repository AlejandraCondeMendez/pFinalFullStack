# Generated by Django 5.1.1 on 2024-10-30 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0003_alter_comentarios_table'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='comentarios',
            table='libro_comentarios',
        ),
    ]
