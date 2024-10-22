from django.urls import path
from .views import ComentariosViews
urlpatterns = [
    path('libros/comentarios', ComentariosViews.as_view(), name='comentarios')
]
