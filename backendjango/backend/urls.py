
from django.contrib import admin
from django.urls import include, path
from apps.usuarios.views import RegistroView
from apps.usuarios.views import InicioSesionView

urlpatterns = [
    path('api/', include('usuarios.urls'))
]
