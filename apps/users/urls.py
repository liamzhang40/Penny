from django.urls import path
from .views import SignUpView, UsersAPIView, login_success, logout_success

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('api/users/v1/', UsersAPIView.as_view()),
	path('login_success/', login_success, name='login_success'),
	path('logout_success/', logout_success, name='logout_success'),
]