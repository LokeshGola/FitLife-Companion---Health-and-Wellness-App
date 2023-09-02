from django.urls import path
from . import views

urlpatterns = [
    # URL patterns for the User entity
    path('users/', views.user_list, name='user_list'),
    path('users/<int:pk>/', views.user_detail, name='user_detail'),
    path('users/create/', views.user_create, name='user_create'),
    path('users/update/<int:pk>/', views.user_update, name='user_update'),
    path('users/delete/<int:pk>/', views.user_delete, name='user_delete'),

    # URL patterns for the Trainer entity
    path('trainers/', views.trainer_list, name='trainer_list'),
    path('trainers/<int:pk>/', views.trainer_detail, name='trainer_detail'),
    path('trainers/create/', views.trainer_create, name='trainer_create'),
    path('trainers/update/<int:pk>/', views.trainer_update, name='trainer_update'),
    path('trainers/delete/<int:pk>/', views.trainer_delete, name='trainer_delete'),

    # URL patterns for the WorkoutPlan entity
    path('workoutplans/', views.workoutPlan_list, name='workoutPlan_list'),
    path('workoutplans/<int:pk>/', views.workoutPlan_detail, name='workoutPlan_detail'),
    path('workoutplans/create/<int:trainerId>/', views.workoutPlan_create, name='workoutPlan_create'),
    path('workoutplans/update/<int:pk>/', views.workoutPlan_update, name='workoutPlan_update'),
    path('workoutplans/delete/<int:pk>/', views.workoutPlan_delete, name='workoutPlan_delete'),

]
