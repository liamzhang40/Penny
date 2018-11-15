from django.shortcuts import render

# Create your views here.
class RestaurantsAPIView(request):
    query = request.GET.get('city')
