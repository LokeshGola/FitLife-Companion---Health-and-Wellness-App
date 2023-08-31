// ProgressTrackingScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Import the chart library
// import DatePicker from 'react-native-datepicker';


const ProgressTrackingScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyMeasurements, setBodyMeasurements] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Mock data for the progress chart
  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Example labels
    datasets: [
      {
        data: [65, 67, 68.5, 70], // Example weight data
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color
        strokeWidth: 2, // Line width of the chart
      },
    ],
  };

  const handleSaveProgressData=()=>{
    // Implement save progress logic here;
    if (!date || !weight || !bodyMeasurements || !notes) {
        setErrorMessage('Please fill in all fields.');
        return;
      }
    // Implement save progress logic here;


    // Reset error message
    setErrorMessage('');

    // Navigate to another screen or perform other actions
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracking</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Body Measurements"
        value={bodyMeasurements}
        onChangeText={setBodyMeasurements}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />
      <Button title="Save Progress" onPress={  handleSaveProgressData } />
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Your last 4 weeks progress</Text>
        <LineChart
          data={progressData}
          width={300}
          height={200}
          yAxisLabel="kg"
          chartConfig={{
            backgroundGradientFrom: '#f0f0f0',
            backgroundGradientTo: '#f0f0f0',
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
        />
      </View>
      
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
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ProgressTrackingScreen;
