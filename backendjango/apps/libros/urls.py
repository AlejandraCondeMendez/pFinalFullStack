from django.urls import path
from .views import LibroIDView, LibroView
from .views import LibroGetView
from .views import LibroDeleteView
from .views import LibroPutView

urlpatterns = [
    path('libros/', LibroView.as_view(), name='librospost'),
    path("librosUserID/<int:usuarioLibro>/", LibroGetView.as_view(), name="libroget"), # CAMBIAR URLS LibrosIDUsuario
    path("libroID/<int:id>/", LibroIDView.as_view(), name="libroIDget"), 
    path("librosDelete/<int:id>/", LibroDeleteView.as_view(), name="librodelete"),
    path("librosPut/<int:id>/", LibroPutView.as_view(), name='libroput')
]

# int:usuarioLibro es la kwargs de la view