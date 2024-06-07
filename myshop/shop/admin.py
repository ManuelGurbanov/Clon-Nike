# shop/admin.py
from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')  # Asegúrate de que 'stock' existe en Product

admin.site.register(Product, ProductAdmin)
