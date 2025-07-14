from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    email = request.data.get('email')
    firstname = request.data.get('firstname')
    lastname = request.data.get('lastname')
    password = request.data.get('password')
    passwordConfirm = request.data.get('passwordConfirm')
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Пользователь уже существует'}, status=400)

    if not username:
        return Response({'error': 'Введите имя пользователя'}, status=400)

    if not email:
        return Response({'error': 'Введите email'}, status=400)
    
    if not firstname or not lastname:
        return Response({'error': 'Введите Фамилию и имя'}, status=400)
    
    if not password or not passwordConfirm:
        return Response({'error': 'Введите пароль'}, status=400)

    if password != passwordConfirm:
        return Response({'error': 'Пароли не совпадают'}, status=400)


    User.objects.create_user(username=username, password=password, first_name=firstname, last_name=lastname)
    return Response({'message': 'Регистрация успешна'}, status=201)
