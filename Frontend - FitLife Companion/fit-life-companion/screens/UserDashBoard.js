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
        navigation.navigate('GoalSettingScreen'); // Navigate to UserProfileScreen
    };

    return(
        <View>
            <Text style={styles.container}>Welcome User!</Text>

            <br/>
            <Button title="Enter Profile Details" onPress={navigateToUserProfileScreen} />
            <br/>
            <Button title="Set Your Goal" onPress={navigateToGoalSettingScreen} />
            <br/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   textalign: "center",
        flex: 1,
        justifyContent: 'center',
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