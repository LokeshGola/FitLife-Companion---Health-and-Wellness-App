
// WorkoutLogScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const WorkoutLogScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSaveLog = async () => {
    if (!date || !selectedPlan || !exercises || !duration || !userId) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Save workout log information to state management or database
    try {
      const response = await fetch(`http://localhost:8000/api/userWorkoutLogs/create/${userId}/${selectedPlan}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "date": date,
          "exercises": exercises,
          "duration": duration
        }),
      });
      console.log(response)
      if (response.status === 201) {
        console.log('Log saved successfully');
        // You can navigate to another screen or perform any additional actions here
        // alert("Profile saved successfully")
        setSuccessMessage("Log saved successfully")
      } else {
        console.error('Error saving workout log. Status:', response.status);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
        // alert("Something went wrong. Profile not saved.")

        setSuccessMessage("Something went wrong. Log not saved successfully")
      }
    } catch (error) {
      console.error('API request error:', error);
    }

    // Reset error message
    setErrorMessage('');

    // Navigate to another screen or perform other actions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      {/* <Picker
        selectedValue={selectedPlan}
        onValueChange={(itemValue) => setSelectedPlan(itemValue)}
        style={styles.picker}
      > */}
      {/* Dropdown options for subscribed workout plans */}
      {/* ... */}
      {/* </Picker> */}

      <TextInput
        style={styles.input}
        placeholder="Enter Plan Id"
        value={selectedPlan}
        onChangeText={setSelectedPlan}
      />

      <TextInput
        style={styles.input}
        placeholder="Exercises"
        value={exercises}
        onChangeText={setExercises}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter User Id"
        value={userId}
        onChangeText={setUserId}
      />
      <Button title="Save Workout Log" onPress={handleSaveLog} />
      <br/>
      <Text style={styles.successText}>{successMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  picker: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText:{
    fontWeight: "bold",
    fontSize:20,
    marginBottom: 10,
    color:"green"
  },
});

export default WorkoutLogScreen;
