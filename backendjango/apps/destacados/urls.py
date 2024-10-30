from django.urls import path
from .views import DestacadosViews

urlpatterns = [
    path('libros/destacados', DestacadosViews.as_view(), name='destacados')
]
