
// import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const TrainerDashBoard = ()=>{

    const navigation = useNavigation(); // Access the navigation object

    const navigateToTrainerProfileScreen = () => {
    navigation.navigate('TrainerProfileScreen'); // Navigate to UserProfileScreen
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Trainer!</Text>
            <br/>
            <Button title="Enter Profile Details" onPress={navigateToTrainerProfileScreen} />
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

export default TrainerDashBoard;