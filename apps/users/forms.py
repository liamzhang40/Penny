from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
	class Meta(UserCreationForm.Meta):
		model = CustomUser
		fields = UserCreationForm.Meta.fields + ('firstname', 'lastname', 'age',)
		#ields = ('firstname', 'lastname', 'username', 'email', 'age',)
		labels = {
			'firstname': 'First Name',
			'lastname': 'Last Name',
		}

class CustomUserChangeForm(UserChangeForm):
	class Meta:
		model = CustomUser
		fields = UserChangeForm.Meta.fields
		fields = ('username', 'email', 'age',)