from django.urls import path
from .views import ComprasViews

urlpatterns = [
    path('libros/compras', ComprasViews.as_view(), name='compras')
]
