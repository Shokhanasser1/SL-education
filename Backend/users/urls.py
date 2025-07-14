from django.urls import path
from .views import register
from .views import register, MyTokenObtainPairView
urlpatterns = [
    path('register/', register),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]