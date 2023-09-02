from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    height = models.PositiveIntegerField()
    weight = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)
    
class Trainer(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    specialization = models.CharField(max_length=100)
    experience = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)

class WorkoutPlan(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=100)
    goal = models.CharField(max_length=20, choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Cardio Fitness', 'Cardio Fitness')])
    duration = models.PositiveIntegerField()
    description = models.TextField()

class NutritionPlan(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=100)
    goal = models.CharField(max_length=20, choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Balanced Diet', 'Balanced Diet')])
    duration = models.PositiveIntegerField()
    guidelines = models.TextField()

class FitnessGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    goal_type = models.CharField(max_length=20, choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Endurance', 'Endurance')])
    target = models.CharField(max_length=100)
    timeline = models.CharField(max_length=100)

class UserWorkoutLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    exercises = models.TextField()
    duration = models.PositiveIntegerField()

class UserNutritionLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    nutrition_plan = models.ForeignKey(NutritionPlan, on_delete=models.CASCADE)
    meals = models.TextField()
    caloric_intake = models.PositiveIntegerField()

class ProgressTracking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    weight = models.PositiveIntegerField()
    body_measurements = models.TextField()
    notes = models.TextField()
