from django.urls import path
from .views import CarritoViews

urlpatterns = [
    path("libros/carrito", CarritoViews.as_view(), name='carrito')
]