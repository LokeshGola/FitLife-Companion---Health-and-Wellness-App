
// App.js or Navigation file

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './UserProfileScreen'; // Update the path
import GoalSettingScreen from './GoalSettingScreen'; // Update the path
import UserDashBoard from './UserDashBoard';

import TrainerDashBoard from './TrainerDashBoard';
import TrainerProfileScreen from './TrainerProfileScreen';
import Welcome from './welcome';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen name="WelcomeScreen" component={Welcome}/>
            <Stack.Screen name="UserDashBoard" component={UserDashBoard} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
            <Stack.Screen name="GoalSettingScreen" component={GoalSettingScreen} />

            <Stack.Screen name="TrainerDashBoard" component={TrainerDashBoard} />
            <Stack.Screen name="TrainerProfileScreen" component={TrainerProfileScreen} />

            
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
