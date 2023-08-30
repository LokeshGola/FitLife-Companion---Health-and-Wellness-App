import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import UserNavigator from './screens/UserNavigator';
// import TrainerNavigator from './screens/TrainerNavigator';
import MainNavigator from './screens/MainNavigator';


// const Stack = createStackNavigator();

const App = () => {
  // return (
    // <UserProfileProvider>
      // <NavigationContainer>
        // <UserNavigator/>
        // <TrainerNavigator/>
      // </NavigationContainer>
    // </UserProfileProvider>
  // );
  return(
    <MainNavigator/>
  );
};

export default App;
