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


# Yelp Fusion no longer uses OAuth as of December 7, 2017.
# You no longer need to provide Client ID to fetch Data
# It now uses private keys to authenticate requests (API Key)
# You can find it on
# https://www.yelp.com/developers/v3/manage_app
API_KEY= None 


# API constants, you shouldn't have to change these.
API_HOST = 'https://api.yelp.com'
SEARCH_PATH = '/v3/businesses/search'
BUSINESS_PATH = '/v3/businesses/'  # Business ID will come after slash.


# Defaults for our simple example.
DEFAULT_TERM = 'dinner'
DEFAULT_LOCATION = 'San Francisco, CA'
SEARCH_LIMIT = 3


def biz_request(host, path, api_key, url_params=None):
    """Given your API_KEY, send a GET request to the API.
    Args:
        host (str): The domain host of the API.
        path (str): The path of the API after the domain.
        API_KEY (str): Your API Key.
        url_params (dict): An optional set of query parameters in the request.
    Returns:
        dict: The JSON response from the request.
    Raises:
        HTTPError: An error occurs from the HTTP request.
    """
    url_params = url_params or {}
    url = '{0}{1}'.format(host, quote(path.encode('utf8')))
    headers = {
        'Authorization': 'Bearer %s' % api_key,
    }

    print(u'Querying {0} ...'.format(url))

    print(datetime.datetime.now())

    response = requests.request('GET', url, headers=headers, params=url_params)

    print(datetime.datetime.now())
    # pdb.set_trace()
    return HttpResponse(
        content=response.content,
        status=response.status_code,
        content_type=response.headers['Content-Type']
    )


def search(api_key, term, location):
    """Query the Search API by a search term and location.
    Args:
        term (str): The search term passed to the API.
        location (str): The search location passed to the API.
    Returns:
        dict: The JSON response from the request.
    """

    url_params = {
        'term': term.replace(' ', '+'),
        'location': location.replace(' ', '+'),
        'limit': SEARCH_LIMIT
    }
    return biz_request(API_HOST, SEARCH_PATH, api_key, url_params=url_params)


# Create your views here.
class SearchList(generics.ListCreateAPIView):
	queryset = BusinessSearch.objects.all()
	serializer_class = SearchSerializer

class SearchDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = BusinessSearch.objects.all()
	serializer_class = SearchSerializer


def detail(request):
    location = request.GET.get('location')
    term = request.GET.get('term')
    
    return search(settings.YELP_API_KEY, term, location)

