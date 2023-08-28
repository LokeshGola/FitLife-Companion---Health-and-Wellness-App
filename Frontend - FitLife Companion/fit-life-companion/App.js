import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserProfileScreen from './screens/UserProfileScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfileScreen">
        {/* Define your screens here */}
        
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        {/* <Stack.Screen name="CreateScreen" component={CreateTodo} /> */}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
