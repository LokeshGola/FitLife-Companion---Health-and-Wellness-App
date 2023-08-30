// import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const UserDashBoard = ()=>{

    const navigation = useNavigation(); // Access the navigation object

    const navigateToUserProfileScreen = () => {
    navigation.navigate('UserProfileScreen'); // Navigate to UserProfileScreen
    };
    const navigateToGoalSettingScreen = () => {
        navigation.navigate('GoalSettingScreen'); // Navigate to GoalSettingScreen
    };
    const navigateToProgressTrackingScreen = () => {
        navigation.navigate('ProgressTrackingScreen'); // Navigate to ProgressTrackingScreen
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome User!</Text>

            <br/>
            <Button title="Enter Profile Details" onPress={navigateToUserProfileScreen} />
            <br/>
            <Button title="Set Your Goal" onPress={navigateToGoalSettingScreen} />
            <br/>
            <Button title="Track Your Progress" onPress={navigateToProgressTrackingScreen} />
            <br/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },

  });

export default UserDashBoard;