
from django.contrib import admin
from django.urls import path
from apps.usuarios.views import RegistroView
from apps.usuarios.views import InicioSesionView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('registro/', RegistroView.as_view()),
    path('iniciosesion/', InicioSesionView.as_view())
]
