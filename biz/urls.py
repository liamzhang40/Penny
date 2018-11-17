from django.urls import path

from .views import SearchList, SearchDetail, APIListView

urlpatterns = [
	path('v1/', SearchList.as_view()),
	path('v1/<int:pk>/', SearchDetail.as_view()),
	path('yelp/v1/', APIListView.as_view()),
]