from django.urls import path
from .views import CarritoViews

urlpatterns = [
    path("carrito/", CarritoViews.as_view(), name='carrito')
]