from django.urls import path
from .views import LibroView
from .views import LibroGetView
from .views import LibroDeleteView
from .views import LibroPutView

urlpatterns = [
    path('libros/', LibroView.as_view(), name='librospost'),
    path("librosID/<int:usuarioLibro>/", LibroGetView.as_view(), name="libroget"),
    path("librosDelete/<int:id>/", LibroDeleteView.as_view(), name="librodelete"),
    path("librosPut/<int:id>/", LibroPutView.as_view(), name='libroput')
]

# int:usuarioLibro es la kwargs de la view