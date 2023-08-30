
// App.js or Navigation file

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './UserProfileScreen'; 
import GoalSettingScreen from './GoalSettingScreen'; 
import UserDashBoard from './UserDashBoard';
import ActivityLoggingScreen from './ActivityLoggingScreen';
import WorkoutLogScreen from './WorkoutLogScreen';
import NutritionLogScreen from './NutritionLogScreen';
import ProgressTrackingScreen from './ProgressTrackingScreen';

import TrainerDashBoard from './TrainerDashBoard';
import TrainerProfileScreen from './TrainerProfileScreen';
import Welcome from './welcome';

import { GoalProvider } from '../contexts/GoalContext';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <GoalProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
            {/* screens for user  */}
            <Stack.Screen name="WelcomeScreen" component={Welcome}/>
            <Stack.Screen name="UserDashBoard" component={UserDashBoard} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
            <Stack.Screen name="GoalSettingScreen" component={GoalSettingScreen} />
            {/* logging screens */}
            <Stack.Screen name="ActivityLoggingScreen" component={ActivityLoggingScreen} />
            <Stack.Screen name="WorkoutLogScreen" component={WorkoutLogScreen} />
            <Stack.Screen name="NutritionLogScreen" component={NutritionLogScreen} />
            <Stack.Screen name="ProgressTrackingScreen" component={ProgressTrackingScreen} />

            {/* screens for trainer  */}
            <Stack.Screen name="TrainerDashBoard" component={TrainerDashBoard} />
            <Stack.Screen name="TrainerProfileScreen" component={TrainerProfileScreen} />

            
        </Stack.Navigator>
    </NavigationContainer>
    </GoalProvider>
  );
};

export default MainNavigator;
