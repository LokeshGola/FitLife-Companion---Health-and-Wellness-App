# Generated by Django 4.2.4 on 2023-09-02 11:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NutritionPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan_name', models.CharField(max_length=100)),
                ('goal', models.CharField(choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Balanced Diet', 'Balanced Diet')], max_length=20)),
                ('duration', models.PositiveIntegerField()),
                ('guidelines', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Trainer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], max_length=10)),
                ('specialization', models.CharField(max_length=100)),
                ('experience', models.PositiveIntegerField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contact_number', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.PositiveIntegerField()),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], max_length=10)),
                ('height', models.PositiveIntegerField()),
                ('weight', models.PositiveIntegerField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contact_number', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='WorkoutPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan_name', models.CharField(max_length=100)),
                ('goal', models.CharField(choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Cardio Fitness', 'Cardio Fitness')], max_length=20)),
                ('duration', models.PositiveIntegerField()),
                ('description', models.TextField()),
                ('trainer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.trainer')),
            ],
        ),
        migrations.CreateModel(
            name='UserWorkoutLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('exercises', models.TextField()),
                ('duration', models.PositiveIntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.user')),
                ('workout_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.workoutplan')),
            ],
        ),
        migrations.CreateModel(
            name='UserNutritionLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('meals', models.TextField()),
                ('caloric_intake', models.PositiveIntegerField()),
                ('nutrition_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.nutritionplan')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.user')),
            ],
        ),
        migrations.CreateModel(
            name='ProgressTracking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('weight', models.PositiveIntegerField()),
                ('body_measurements', models.TextField()),
                ('notes', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.user')),
            ],
        ),
        migrations.AddField(
            model_name='nutritionplan',
            name='trainer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.trainer'),
        ),
        migrations.CreateModel(
            name='FitnessGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goal_type', models.CharField(choices=[('Weight Loss', 'Weight Loss'), ('Muscle Gain', 'Muscle Gain'), ('Endurance', 'Endurance')], max_length=20)),
                ('target', models.CharField(max_length=100)),
                ('timeline', models.CharField(max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fitlife_app.user')),
            ],
        ),
    ]
