from django.urls import path, re_path
from .views import SearchList, SearchDetail, YelpAPIBusinessSearch, YelpAPIAutoComplete

urlpatterns = [
	path('api/v1/', SearchList.as_view()),
	path('api/v1/<int:pk>/', SearchDetail.as_view()),
	path('yelp_business_search/v1/', YelpAPIBusinessSearch.as_view()),
	path('yelp_autocomplete/v1/', YelpAPIAutoComplete.as_view())
]
