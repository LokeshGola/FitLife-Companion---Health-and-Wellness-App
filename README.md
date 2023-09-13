# **FitLife-Companion---Health-and-Wellness-App**

# **Discover the Wonders of Fitness**

## **Introduction**

Welcome to FitLife-Companion: Health and Wellness App, your gateway to the fascinating world of Fitness exploration. This guide will walk you through the key features of the platform, helping you embark on an fitness journey like no other.

## **Platform Access**

Access the ExploreNature platform through **[https://explorenature-demo.com](https://explorenature-demo.com/)**

## **Feature Walkthrough**

Watch our guided video walkthrough: **[Link to Feature Walkthrough](https://youtu.be/sddJ-tszCSQ)**

## **Key Features**

- Learn About Various Species
- Dive Into Diverse Habitats
- Challenge Yourself with Interactive Quizzes
- Embark on a Virtual Nature Tour
- Interact with Simulated AI Nature Guide
- Discover Fun Facts About Nature

## **Design Approach and Assumptions**

- Designed for simplicity and intuitive user experience for demonstration purposes.
- Assumption: Simplified navigation process for the sake of this demo.

## **Installation & Getting Started**

1. Clone the repository: **`git clone <https://github.com/LokeshGola/FitLife-Companion---Health-and-Wellness-App>`**
2. Install dependencies: **`npm install`**
3. Start the guided tour: **`npm start`**

## **User Journey**

1. Log in using provided credentials.
2. Explore the diverse species database.
3. Dive into various habitats and their unique features.
4. Engage in interactive quizzes to test your knowledge.
5. Embark on a virtual nature tour, exploring captivating stops.
6. Have fun interacting with our AI nature guide.
7. Enjoy a random nature fact whenever you'd like.

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
- - **`GET /api/nutrition_plans/create/<int:trainerId>/`** - Trainers create nutrition plans for users.


... (include more API endpoints as needed)

## **Technology Stack**

- Front-end: React-Native
- Back-end: Django, Python
- Database: MySQL

---
