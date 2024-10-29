from django.urls import path
from .views import ComprasViews
from .views import PrestamoViews

urlpatterns = [
    path('libros/compras', ComprasViews.as_view(), name='compras'),
    path('libros/prestamo', PrestamoViews.as_view(), name='prestamo')   
]
