from django.urls import path
from .views import LibroIDView, LibroView
from .views import LibroGetView
from .views import LibroDeleteView
from .views import LibroPutView
from .views import LibroCateView
from .views import LibroEstadoView
from .views import LibroBusquedaView
urlpatterns = [
    path('libros/', LibroView.as_view(), name='librospost'),
    path("librosUserID/<int:usuarioLibro>/", LibroGetView.as_view(), name="libroget"), # CAMBIAR URLS LibrosIDUsuario
    path("libroID/<int:id>/", LibroIDView.as_view(), name="libroIDget"), 
    path("librosDelete/<int:id>/", LibroDeleteView.as_view(), name="librodelete"),
    path("librosPut/<int:id>/", LibroPutView.as_view(), name='libroput'),
    path("libros/categoria/<str:categoria>/", LibroCateView.as_view(), name='categoria'),
    path("libros/estado/<str:estado>/", LibroEstadoView.as_view(), name='estado'),
    path("libros/busqueda/", LibroBusquedaView.as_view(), name='libro_busqueda'),   
       
]

# int:usuarioLibro es la kwargs de la view