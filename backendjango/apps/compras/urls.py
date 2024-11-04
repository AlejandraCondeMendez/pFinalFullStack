from django.urls import path
from .views import ComprasViews
from .views import PrestamoViews, PrestamosUsuarioView

urlpatterns = [
    path('libros/compras', ComprasViews.as_view(), name='compras'),
    path('libros/prestamo', PrestamoViews.as_view(), name='prestamo'),
    path('libros/prestamos/usuario/<int:usuario_prestamo>/', PrestamosUsuarioView.as_view(), name='prestamos_usuario'),   
]
