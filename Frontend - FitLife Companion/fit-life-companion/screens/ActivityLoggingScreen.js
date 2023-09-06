// import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActivityLoggingScreen = ()=>{

    const navigation= useNavigation();

    const navigateToWorkoutLogScreen = () => {
        navigation.navigate('WorkoutLogScreen'); // Navigate to WorkoutLogScreen
    };
    const navigateToNutritionLogScreen = () => {
        navigation.navigate('NutritionLogScreen'); // Navigate to NutritionLogScreen
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Activity Log</Text>
            <Button title="Workout Log" onPress={navigateToWorkoutLogScreen} />
            <br/>
            <Button title="Nutrition Log" onPress={navigateToNutritionLogScreen} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        padding: 20,
        // alignItems: "center",
        // backgroundColor: "#b7d9c9"
        backgroundColor: "#edecd8"
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: 'white',
    },
  });

export default ActivityLoggingScreen;