# **FitLife-Companion---Health-and-Wellness-App**

# **Discover the Wonders of Fitness**

## **Introduction**

Welcome to FitLife-Companion: Health and Wellness App, your gateway to the fascinating world of Fitness exploration. This guide will walk you through the key features of the platform, helping you embark on an fitness journey like no other.


## **Feature Walkthrough**

Watch our guided video walkthrough: **[Link to Feature Walkthrough](https://youtu.be/sddJ-tszCSQ)**

## **Key Features**

- Trainers create workout and nutrition plans for users
- Users can set the goals for fitness purpose
- Users can select workout and nutrition plans according to the goal
- Users can track the progress 

## **Design Approach and Assumptions**

- Designed for simplicity and intuitive user experience for demonstration purposes.
- Assumption: Simplified navigation process for the sake of this demo.

## **Installation & Getting Started**

1. Clone the repository: **`git clone <https://github.com/LokeshGola/FitLife-Companion---Health-and-Wellness-App>`**
2. Install dependencies: **`npm install`**
3. Start the guided tour: **`npm start`**
4. For backend, run 'python manage.py runserver'



## **API Endpoints**


### **Users**

- **`GET /api/users/`** - Retrieve all users.
- **`GET /api/users/:id`** - Retrieve users details.
- **`POST /api/users/create/`** - Create user profile.

### **Goal Setting**

- **`GET /api/fitnessGoals/create/<int:userId>/`** - Users set the goals.

### **Activity Logging**

- **`GET /api/userWorkoutLogs/create/<int:userId>/<int:workoutPlanId>/`** - Users create workout log.
- - **`GET /api/userNutritionLogs/create/<int:userId>/<int:nutritionPlanId>/`** - Users create nutrition log.

### **Progress Tracking**

- **`GET /api/progressTrackings/create/<int:userId>/`** - Users create progress tracking.

### **Trainers**

- **`GET /api/trainers/`** - Retrieve all trainers.
- **`GET /api/trainers/:id`** - Retrieve trainers details.
- **`POST /api/trainers/create/`** - Create trainers profile.

### **Plans for users**

- **`GET /api/workoutplans/create/<int:trainerId>/`** - Trainers create workout plans for users.
- **`GET /api/nutrition_plans/create/<int:trainerId>/`** - Trainers create nutrition plans for users.



## **Technology Stack**

- Front-end: React-Native, JavaScript
- Back-end: Django, Python
- Database: MySQL

---
