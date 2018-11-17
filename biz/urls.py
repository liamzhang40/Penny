from django.urls import path

from .views import SearchList, SearchDetail, BusinessAPIView

urlpatterns = [
	path('api/v1/', SearchList.as_view()),
	path('api/v1/<int:pk>/', SearchDetail.as_view()),
	path('api/yelp/v1/', BusinessAPIView.as_view()),
]