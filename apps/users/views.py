from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm

from rest_framework import generics
from .models import CustomUser
from .serializers import CustomUserSerializer

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('index')
    template_name = 'signup.html'

class UsersAPIView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
   
def login_success(request):
	if request.user.is_superuser:
		return redirect("/admin/")
	else:
		return redirect("/")

def logout_success(request):
	if request.user.is_superuser:
		return redirect("/admin/")
	else:
		return redirect("/login/")