from django.urls import path, re_path
from .views import SearchList, SearchDetail, YelpAPISearch

urlpatterns = [
	path('api/v1/', SearchList.as_view()),
	path('api/v1/<int:pk>/', SearchDetail.as_view()),
	path('yelp/v1/', YelpAPISearch.as_view()),
]