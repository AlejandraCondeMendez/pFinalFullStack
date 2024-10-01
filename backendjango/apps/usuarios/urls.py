from django.urls import path
from .views import RegistroView, InicioSesionView

urlpatterns = [
    path('registro/', RegistroView.as_view(), name='registro'),
    path('iniciosesion/', InicioSesionView.as_view(), name='iniciosesion')
]
