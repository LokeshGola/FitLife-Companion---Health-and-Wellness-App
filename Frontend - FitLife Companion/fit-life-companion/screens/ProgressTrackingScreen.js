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
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


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

  const handleSaveProgressData = async () => {
    // Implement save progress logic here;
    if (!date || !weight || !bodyMeasurements || !notes || !userId) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    // Implement save progress logic here;
    try {
      const response = await fetch(`http://localhost:8000/api/progressTrackings/create/${userId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "date": date,
          "weight": weight,
          "body_measurements": bodyMeasurements,
          "notes": notes
        }),
      });
      console.log(response)
      if (response.status === 201) {
        console.log('Tracking saved successfully');
        // You can navigate to another screen or perform any additional actions here
        // alert("Profile saved successfully")
        setSuccessMessage("Tracking saved successfully")
      } else {
        console.error('Error saving progress tracking. Status:', response.status);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
        // alert("Something went wrong. Profile not saved.")

        setSuccessMessage("Something went wrong. Tracking not saved successfully")
      }
    } catch (error) {
      console.error('API request error:', error);
    }

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
        placeholder="Enter User Id"
        value={userId}
        onChangeText={setUserId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />
      <Button title="Save Progress" onPress={handleSaveProgressData} />
      <br/>
      <Text style={styles.successText}>{successMessage}</Text>
      <br/>
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
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "green"
  },
});

export default ProgressTrackingScreen;
