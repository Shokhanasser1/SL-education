from django.urls import path
from .views import (
    CourseListCreateView,
    TeacherCoursesView
)

urlpatterns = [
    path('', CourseListCreateView.as_view(), name='course-list-create'),
    path('teacher/', TeacherCoursesView.as_view(), name='teacher-courses'),

]