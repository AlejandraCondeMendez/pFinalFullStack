from django.urls import path
from .views import LibroView
from .views import LibroGetView

urlpatterns = [
    path('libros/', LibroView.as_view(), name='librospost'),
    path("librosID/<int:usuarioLibro>/", LibroGetView.as_view(), name="libroget")
]

# int:usuarioLibro es la kwargs de la view