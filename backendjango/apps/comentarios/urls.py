from django.urls import path
from .views import ComentariosViews, ComentariosIDViews
urlpatterns = [
    path('libros/comentarios', ComentariosViews.as_view(), name='comentarios'),
    path('libros/comentarios/<int:libro_comentario>/', ComentariosIDViews.as_view(), name='comentariosID')
]