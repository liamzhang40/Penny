from django.urls import path
from django.contrib.auth import logout
from .views import SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    # path('api/users/v1/', UsersAPIView.as_view()),
    path('logout/', logout),
]
