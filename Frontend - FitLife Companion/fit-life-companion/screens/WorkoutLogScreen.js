
// WorkoutLogScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const WorkoutLogScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveLog = () => {
    if (!date || !selectedPlan || !exercises || !duration) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Save workout log information to state management or database
    // For now, you can just log the values
    console.log('Date:', date);
    console.log('Selected Plan:', selectedPlan);
    console.log('Exercises:', exercises);
    console.log('Duration:', duration);

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
      <Picker
        selectedValue={selectedPlan}
        onValueChange={(itemValue) => setSelectedPlan(itemValue)}
        style={styles.picker}
      >
        {/* Dropdown options for subscribed workout plans */}
        {/* ... */}
      </Picker>
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
      <Button title="Save Workout Log" onPress={handleSaveLog} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});

export default WorkoutLogScreen;
