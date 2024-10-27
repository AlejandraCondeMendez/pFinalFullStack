
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('api/', include('apps.usuarios.urls')),
    path('api/', include('apps.libros.urls')),
    path('api/', include('apps.compras.urls')),
    path('api/', include('apps.carrito.urls')),
    path('api/', include('apps.comentarios.urls'))
]