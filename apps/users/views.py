from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm

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

# def logout(request):
#     pdb.set_trace()
#     logout(request)
    # should return empty object only blut also delete 
	# session token from cookie
