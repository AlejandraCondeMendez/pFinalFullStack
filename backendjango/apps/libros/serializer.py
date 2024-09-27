from rest_framework.serializers import ModelSerializer
from .models import Libros

class PostSerializer(ModelSerializer):
    class Meta:
        model = Libros
        fields = []
