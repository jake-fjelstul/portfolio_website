from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('unity/', views.unity, name='unity'),
    path('django/', views.django_projects, name='django'),
    path('timeline/', views.timeline, name='timeline'),
    path('rust/', views.rust, name='rust'),
    path('react/', views.react, name='react'),
    path('writing/', views.writing, name='writing'),
    path('cpp/', views.cpp_projects, name='cpp'),
    path('java/', views.java_projects, name='java'),
    path('ai/', views.ai_page, name='ai'),
    path('city/', views.city, name='city'),
    path('hardware/', views.hardware, name='hardware'),
]