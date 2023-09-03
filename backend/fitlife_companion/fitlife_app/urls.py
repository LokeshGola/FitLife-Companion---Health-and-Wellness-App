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

    # URL patterns for the NutritionPlan entity
    path('nutrition_plans/', views.nutritionPlan_list, name='nutritionPlan_list'),
    path('nutrition_plans/<int:pk>/', views.nutritionPlan_detail, name='nutritionPlan_detail'),
    path('nutrition_plans/create/<int:trainerId>/', views.nutritionPlan_create, name='nutritionPlan_create'),
    path('nutrition_plans/update/<int:pk>/', views.nutritionPlan_update, name='nutritionPlan_update'),
    path('nutrition_plans/delete/<int:pk>/', views.nutritionPlan_delete, name='nutritionPlan_delete'),

    # URL patterns for the FitnessGoal entity
    path('fitnessGoals/', views.fitnessGoal_list, name='fitnessGoal_list'),
    path('fitnessGoals/<int:pk>/', views.fitnessGoal_detail, name='fitnessGoal_detail'),
    path('fitnessGoals/create/<int:userId>/', views.fitnessGoal_create, name='fitnessGoal_create'),
    path('fitnessGoals/update/<int:pk>/', views.fitnessGoal_update, name='fitnessGoal_update'),
    path('fitnessGoals/delete/<int:pk>/', views.fitnessGoal_delete, name='fitnessGoal_delete'),

    # URL patterns for the UserWorkoutLog entity
    path('userWorkoutLogs/', views.userWorkoutLog_list, name='userWorkoutLog_list'),
    path('userWorkoutLogs/<int:pk>/', views.userWorkoutLog_detail, name='userWorkoutLog_detail'),
    path('userWorkoutLogs/create/<int:userId>/<int:workoutPlanId>/', views.userWorkoutLog_create, name='userWorkoutLog_create'),
    path('userWorkoutLogs/update/<int:pk>/', views.userWorkoutLog_update, name='userWorkoutLog_update'),
    path('userWorkoutLogs/delete/<int:pk>/', views.userWorkoutLog_delete, name='userWorkoutLog_delete'),

    # URL patterns for the UserNutritionLog entity
    path('userNutritionLogs/', views.userNutritionLog_list, name='userNutritionLog_list'),
    path('userNutritionLogs/<int:pk>/', views.userNutritionLog_detail, name='userNutritionLog_detail'),
    path('userNutritionLogs/create/<int:userId>/<int:nutritionPlanId>/', views.userNutritionLog_create, name='userNutritionLog_create'),
    path('userNutritionLogs/update/<int:pk>/', views.userNutritionLog_update, name='userNutritionLog_update'),
    path('userNutritionLogs/delete/<int:pk>/', views.userNutritionLog_delete, name='userNutritionLog_delete'),

    # URL patterns for the ProgressTracking entity
    path('progressTrackings/', views.progressTracking_list, name='progressTracking_list'),
    path('progressTrackings/<int:pk>/', views.progressTracking_detail, name='progressTracking_detail'),
    path('progressTrackings/create/<int:userId>/', views.progressTracking_create, name='progressTracking_create'),
    path('progressTrackings/update/<int:pk>/', views.progressTracking_update, name='progressTracking_update'),
    path('progressTrackings/delete/<int:pk>/', views.progressTracking_delete, name='progressTracking_delete'),

]
