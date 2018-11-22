from django.db  import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from penny_settings import settings 
from django.views.generic import View 
from django.http import HttpResponse 


class BusinessSearch(models.Model):
	author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	term = models.CharField(max_length=100)
	location = models.CharField(max_length=100)
	search_time = models.DateTimeField(auto_now_add=True)

	def slug(self):
		return slugify(self.term)
	
	def __str__(self):
		return self.term
