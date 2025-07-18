from rest_framework import serializers
from rest_framework import generics, permissions
from .models import Course

class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'created_at']
        


