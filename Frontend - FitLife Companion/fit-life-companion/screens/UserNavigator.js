
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserDashBoard from './UserDashBoard'
import UserProfileScreen from './UserProfileScreen'
import GoalSettingScreen from './GoalSettingScreen';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserDashBoard">
        {/* Define your screens here */}
        
        <Stack.Screen name="UserDashBoard" component={UserDashBoard} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="GoalSettingScreen" component={GoalSettingScreen} />
      
      </Stack.Navigator>
  );
};

export default UserNavigator;
