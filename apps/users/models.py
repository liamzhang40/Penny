from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django import forms

class CustomUser(AbstractUser):
	firstname = models.CharField(max_length=32, help_text="First Name", blank=True, null=True)
	lastname = models.CharField(max_length=32, help_text="Last Name", blank=True, null=True)
	age = models.PositiveIntegerField(null=True, blank=True)