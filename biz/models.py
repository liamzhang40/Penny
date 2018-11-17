from django.db  import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from mysite import settings 
from django.views.generic import View 
from django.http import HttpResponse 

import argparse
import json
import decimal 
import pprint
import requests
import sys
import urllib

from urllib.error import HTTPError
from urllib.parse import quote
from urllib.parse import urlencode

DEFAULT_TERM = 'dinner'
DEFAULT_LOCATION = 'San Francisco, CA'
SEARCH_LIMIT = 50


class BusinessSearch(models.Model):
	author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	term = models.CharField(max_length=100)
	location = models.CharField(max_length=100)
	search_time = models.DateTimeField(auto_now_add=True)

	def slug(self):
		return slugify(self.term)
	
	def __str__(self):
		return self.term


class DecimalEncoder(json.JSONEncoder):
	def default(self, obj):
		if isInstance(obj, decimal.Decimal):
			return str(obj)
		return json.JSONEncoder.default(self, obj)
