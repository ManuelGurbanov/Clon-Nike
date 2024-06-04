# shop/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Product
from .serializers import ProductSerializer
from rest_framework import viewsets

    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
