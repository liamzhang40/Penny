from rest_framework import serializers
from .models import BusinessSearch

class SearchSerializer(serializers.ModelSerializer):
	
	class Meta:
		fields = '__all__'
		model = BusinessSearch
