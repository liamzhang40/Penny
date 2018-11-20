from django.shortcuts import render
from django.http import HttpResponse 
from rest_framework import generics
from rest_framework.views import APIView 
from rest_framework.response import Response
from penny_settings import settings
from .models import BusinessSearch, DecimalEncoder
from .serializers import SearchSerializer

import argparse
import json
import pprint
import requests
import sys
import urllib
import datetime 
import pdb

# This client code can run on Python 2.x or 3.x.  Your imports can be
# simpler if you only need one of those.
try:
    # For Python 3.0 and later
    from urllib.error import HTTPError
    from urllib.parse import quote
    from urllib.parse import urlencode
except ImportError:
    # Fall back to Python 2's urllib2 and urllib
    from urllib2 import HTTPError
    from urllib import quote
    from urllib import urlencode

# API constants
API_HOST = 'https://api.yelp.com'
SEARCH_PATH = '/v3/businesses/search'
BUSINESS_PATH = '/v3/businesses/'  # Business ID will come after slash.

class YelpAPISearch(APIView):
    def get(self, request):
        if "location" in request.GET:
            self.location = request.GET.get('location')
        else:
            self.latitude = request.GET.get('latitude')
            self.longitude = request.GET.get('longitude')
        self.term = request.GET.get('term')
        self.limit = request.GET.get('limit')
        
        return self.__biz_request_to_yelp()

    def __biz_request_to_yelp(self):
        try:
            url_params = { 
                'term': self.term.replace(' ', '+'),
                'location': self.location.replace(' ', '+'),
                'limit': self.limit
            }
        except AttributeError:
            url_params = {
                'term': self.term.replace(' ', '+'),
                'latitude': self.latitude.replace(' ', '+'),
                'longitude': self.longitude.replace(' ', '+'),
                'limit': self.limit
            }

        # pdb.set_trace()
        url = '{0}{1}'.format(API_HOST, quote(SEARCH_PATH.encode('utf8')))
        headers = {
            'Authorization': 'Bearer %s' % settings.YELP_API_KEY,
        }

        print(u'Querying {0} ...'.format(url), self.limit, "restaurants")
        response = requests.request('GET', url, headers=headers, params=url_params)
        # pdb.set_trace()
        return HttpResponse(
            content=response.content,
            status=response.status_code,
            content_type=response.headers['Content-Type']
        )

# Create your views here.
class SearchList(generics.ListCreateAPIView):
	queryset = BusinessSearch.objects.all()
	serializer_class = SearchSerializer

class SearchDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = BusinessSearch.objects.all()
	serializer_class = SearchSerializer
