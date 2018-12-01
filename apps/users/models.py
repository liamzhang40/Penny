from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django import forms

class CustomUser(AbstractUser):
	first_name = models.CharField(forms.TextInput(attrs={'class':'form-contro', 
														 'placeholder': 'First Name'}),
								  max_length=32,
								  help_text="First name")
	last_name = models.CharField(forms.TextInput(attrs={'class':'form-control', 
														'placeholder': 'Last name'}),
								 max_length=32,
								 help_text="Last name")
	age = models.PositiveIntegerField(null=True, blank=True)