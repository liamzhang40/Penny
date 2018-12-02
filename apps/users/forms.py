from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
	class Meta(UserCreationForm.Meta):
		model = CustomUser
		fields = UserCreationForm.Meta.fields + ('first_name', 'last_name', 'age',)
		fields = ('first_name', 'last_name', 'username', 'email', 'age',)
		labels = {
			'first_name': 'First Name',
			'last_name': 'Last Name',
		}

class CustomUserChangeForm(UserChangeForm):
	class Meta:
		model = CustomUser
		fields = UserChangeForm.Meta.fields
		fields = ('username', 'email', 'age',)