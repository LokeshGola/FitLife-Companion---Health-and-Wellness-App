
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TrainerDashBoard from './TrainerDashBoard'
import TrainerProfileScreen from './TrainerProfileScreen'


const Stack = createStackNavigator();

const TrainerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TrainerDashBoard">
        {/* Define your screens here */}
        
        <Stack.Screen name="TrainerDashBoard" component={TrainerDashBoard} />
        <Stack.Screen name="TrainerProfileScreen" component={TrainerProfileScreen} />
        
      
      </Stack.Navigator>
  );
};

export default TrainerNavigator;
