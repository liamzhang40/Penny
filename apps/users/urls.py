from django.urls import path
from .views import SignUpView, user_logout

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    # path('api/users/v1/', UsersAPIView.as_view()),
    path('logout/', user_logout),
]
