from django.urls import path
from .views import SignUpView, UsersAPIView, login_success

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('api/users/v1/', UsersAPIView.as_view()),
	path('login_success/', login_success, name='login_success')
]