# Generated by Django 5.1.1 on 2024-10-30 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios', '0002_alter_registro_id'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='registro',
            table='libro_usuarios',
        ),
    ]