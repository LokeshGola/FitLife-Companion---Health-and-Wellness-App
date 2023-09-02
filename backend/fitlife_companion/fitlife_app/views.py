from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import User, Trainer, WorkoutPlan, UserWorkoutLog, NutritionPlan, UserNutritionLog, FitnessGoal, ProgressTracking
from .serializers import UserSerializer, TrainerSerializer, WorkoutPlanSerializer, UserWorkoutLogSerializer, NutritionPlanSerializer, UserNutritionLogSerializer, FitnessGoalSerializer, ProgressTrackingSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


 ###### User ######

# List all users
@api_view(['GET'])
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

# Get details of a specific user
@api_view(['GET'])
def user_detail(request, pk):
    user = get_object_or_404(User, pk=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)

# Create a new user
@api_view(['POST'])
def user_create(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

# Update an existing user object
@api_view(['PUT'])
def user_update(request, pk):
    user = get_object_or_404(User, pk=pk)
    serializer = UserSerializer(user, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

# Delete a trainer
@api_view(['DELETE'])
def user_delete(request, pk):
    user = get_object_or_404(User, pk=pk)
    user.delete()
    return Response(status=204)


 ######## Trainer ########

# List all trainers
@api_view(['GET'])
def trainer_list(request):
    trainers = Trainer.objects.all()
    serializer = TrainerSerializer(trainers, many=True)
    return Response(serializer.data)

# Get details of a specific trainer
@api_view(['GET'])
def trainer_detail(request, pk):
    trainer = get_object_or_404(Trainer, pk=pk)
    serializer = TrainerSerializer(trainer)
    return Response(serializer.data)

# Create a new trainer
@api_view(['POST'])
def trainer_create(request):
    serializer = TrainerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Update an existing trainer
@api_view(['PUT'])
def trainer_update(request, pk):
    trainer = get_object_or_404(Trainer, pk=pk)
    serializer = TrainerSerializer(trainer, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a trainer
@api_view(['DELETE'])
def trainer_delete(request, pk):
    trainer = get_object_or_404(Trainer, pk=pk)
    trainer.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


######## WorkoutPlan ########

# List all workoutplan
@api_view(['GET'])
def workoutPlan_list(request):
    workoutPlans = WorkoutPlan.objects.all()
    serializer = WorkoutPlanSerializer(workoutPlans, many=True)
    return Response(serializer.data)

# Get details of a specific workoutplan
@api_view(['GET'])
def workoutPlan_detail(request, pk):
    workoutPlan = get_object_or_404(WorkoutPlan, pk=pk)
    serializer = WorkoutPlanSerializer(workoutPlan)
    return Response(serializer.data)

# Create a new workoutPlan
@api_view(['POST'])
def workoutPlan_create(request, trainerId):
    try:
        # Check if the specified Trainer exists
        trainer = Trainer.objects.get(pk=trainerId)
    except Trainer.DoesNotExist:
        return Response({'error': 'Trainer not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        # Include the trainer ID in the data
        request.data['trainer'] = trainerId   

        # Create a WorkoutPlan serializer with the modified data
        serializer = WorkoutPlanSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

#### Instead of using serializer, we can do manually like this below;

# @api_view(['POST'])
# def workoutPlan_create(request, trainerId):
#     try:
#         # Check if the specified Trainer exists
#         trainer = Trainer.objects.get(pk=trainerId)
#     except Trainer.DoesNotExist:
#         return Response({'error': 'Trainer not found'}, status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'POST':
#         # Extract data from the request
#         plan_name = request.data.get('plan_name')
#         goal = request.data.get('goal')
#         duration = request.data.get('duration')
#         description = request.data.get('description')

#         # Create the WorkoutPlan manually
#         workout_plan = WorkoutPlan(
#             trainer=trainer,
#             plan_name=plan_name,
#             goal=goal,
#             duration=duration,
#             description=description
#         )

#         # Save the WorkoutPlan
#         workout_plan.save()

#         return Response({'message': 'WorkoutPlan created successfully'}, status=status.HTTP_201_CREATED)


# update an existing workoutPlan
@api_view(['PUT'])
def workoutPlan_update(request, pk):
    workoutPlan = get_object_or_404(WorkoutPlan, pk=pk)
    serializer = WorkoutPlanSerializer(workoutPlan, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a workoutPlan
@api_view(['DELETE'])
def workoutPlan_delete(request, pk):
    workoutPlan = get_object_or_404(WorkoutPlan, pk=pk)
    workoutPlan.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


######## NutritionPlan ########

# List all nutritionPlan
@api_view(['GET'])
def nutritionPlan_list(request):
    nutritionPlans = NutritionPlan.objects.all()
    serializer = WorkoutPlanSerializer(nutritionPlans, many=True)
    return Response(serializer.data)

# Get details of a specific nutritionPlan
@api_view(['GET'])
def nutritionPlan_detail(request, pk):
    nutritionPlan = get_object_or_404(NutritionPlan, pk=pk)
    serializer = NutritionPlanSerializer(nutritionPlan)
    return Response(serializer.data)

# Create a new nutritionPlan
@api_view(['POST'])
def nutritionPlan_create(request, trainerId):
    try:
        # Check if the specified Trainer exists
        trainer = Trainer.objects.get(pk=trainerId)
    except Trainer.DoesNotExist:
        return Response({'error': 'Trainer not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        # Include the trainer ID in the data
        request.data['trainer'] = trainerId   

        # Create a nutritionPlan serializer with the modified data
        serializer = NutritionPlanSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# update an existing nutritionPlan
@api_view(['PUT'])
def nutritionPlan_update(request, pk):
    nutritionPlan = get_object_or_404(NutritionPlan, pk=pk)
    serializer = NutritionPlanSerializer(nutritionPlan, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a nutritionPlan
@api_view(['DELETE'])
def nutritionPlan_delete(request, pk):
    nutritionPlan = get_object_or_404(NutritionPlan, pk=pk)
    nutritionPlan.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

