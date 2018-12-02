from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm
from django.contrib.auth import logout

from rest_framework import generics
from .models import CustomUser
from .serializers import CustomUserSerializer

import pdb

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('index')
    template_name = 'signup.html'

# class UsersAPIView(generics.ListAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = CustomUserSerializer

def user_logout(request):
    # if user is not None:
    # will determine if user exits or not
    logout(request)
    return HttpResponse("")
    # should return empty object only blut also delete 
	# session token from cookie
