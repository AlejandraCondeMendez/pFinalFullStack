from django.urls import path
from .views import RegistroView, InicioSesionView, CambioContraView, CambioNombreView

urlpatterns = [
    path('registro/', RegistroView.as_view(), name='registro'),
    path('iniciosesion/', InicioSesionView.as_view(), name='iniciosesion'),
    path('usuario/contra/', CambioContraView.as_view(), name='cambio_contra'),
    path('usuario/nombre/', CambioNombreView.as_view(), name='cambio_nombre')
]
