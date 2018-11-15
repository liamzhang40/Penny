from django.urls import path
from .views import RestaurantsAPIView

urlpatterns = [
    path('api/restaurants/v1/', RestaurantsAPIView.as_view()),
]
