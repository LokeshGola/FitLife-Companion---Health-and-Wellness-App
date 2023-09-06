import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

// import { useUserProfile } from '../contexts/UserProfileContext'; // Update the path
import { useGoalContext } from '../contexts/GoalContext';


const GoalSettingScreen = ({ navigation }) => {  // updated { navigation } here;

  // const { profile } = useUserProfile();
  const { goal, updateGoal } = useGoalContext();
  const [goalType, setGoalType] = useState(goal.type);
  const [goalTarget, setGoalTarget] = useState(goal.target);
  const [goalTimeline, setGoalTimeline] = useState(goal.timeline);
  const [userId, setUserId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSaveGoal = async () => {
    // Save goal information to state management or database

    if (!goalType || !goalTarget || !goalTimeline || !userId) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    updateGoal({
      ...goal,
      type: goalType,
      target: goalTarget,
      timeline: goalTimeline,
    });

    try {
      const response = await fetch(`http://localhost:8000/api/fitnessGoals/create/${userId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "goal_type": goalType,
          "target": goalTarget,
          "timeline": goalTimeline,
        }),
      });
      console.log(response)
      if (response.status === 201) {
        console.log('Goal saved successfully');
        // You can navigate to another screen or perform any additional actions here
        // alert("Profile saved successfully")
        setSuccessMessage("Goal saved successfully")
      } else {
        console.error('Error saving goal. Status:', response.status);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
        // alert("Something went wrong. Profile not saved.")

        setSuccessMessage("Something went wrong. Goal not saved successfully")
      }
    } catch (error) {
      console.error('API request error:', error);
    }

    // Reset error message
    setErrorMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goal Setting</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Picker style={styles.picker}
        selectedValue={goalType}
        onValueChange={(itemValue) => setGoalType(itemValue)}
      >
        <Picker.Item label="Select Your Goal" value="" />
        <Picker.Item label="Weight Loss" value="Weight Loss" />
        <Picker.Item label="Muscle Gain" value="Muscle Gain" />
        <Picker.Item label="Endurance" value="Endurance" />
        {/* Add other goal options */}
      </Picker>
      {/* <br/> */}

      <TextInput style={styles.input}
        placeholder="Enter your goal target"
        value={goalTarget}
        onChangeText={setGoalTarget}
      />
      {/* <br/> */}
      <TextInput style={styles.input}
        placeholder="Enter Timeline"
        value={goalTimeline}
        onChangeText={setGoalTimeline}
      />
      <TextInput style={styles.input}
        placeholder="Enter Your User Id"
        value={userId}
        onChangeText={setUserId}
      />
      {/* <br/> */}
      <Button title="Save Goal" onPress={handleSaveGoal} />
      <br />
      <Button title="Go to Activity Logging" onPress={() => navigation.navigate('ActivityLoggingScreen')} />
      <br />
      <Text style={styles.successText}>{successMessage}</Text>

    </View>
  );
};

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
  successText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "green"
  },
});

export default GoalSettingScreen;
