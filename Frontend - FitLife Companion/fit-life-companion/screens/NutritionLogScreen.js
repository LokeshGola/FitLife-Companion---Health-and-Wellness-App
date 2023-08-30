// NutritionLogScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const NutritionLogScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [meals, setMeals] = useState('');
  const [caloricIntake, setCaloricIntake] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveLog = () => {
    if (!date || !selectedPlan || !meals || !caloricIntake) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Save nutrition log information to state management or database
    // For now, you can just log the values
    console.log('Date:', date);
    console.log('Selected Plan:', selectedPlan);
    console.log('Meals:', meals);
    console.log('Caloric Intake:', caloricIntake);

    // Reset error message
    setErrorMessage('');

    // Navigate to another screen or perform other actions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Log</Text>
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
        {/* Dropdown options for subscribed nutrition plans */}
        {/* ... */}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Meals"
        value={meals}
        onChangeText={setMeals}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Caloric Intake"
        value={caloricIntake}
        onChangeText={setCaloricIntake}
        keyboardType="numeric"
      />
      <Button title="Save Nutrition Log" onPress={handleSaveLog} />
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

export default NutritionLogScreen;
