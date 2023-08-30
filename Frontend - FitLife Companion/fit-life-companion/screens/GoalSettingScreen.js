import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet  } from 'react-native';

// import { useUserProfile } from '../contexts/UserProfileContext'; // Update the path
import { useGoalContext } from '../contexts/GoalContext'; 


const GoalSettingScreen = ({ navigation }) => {  // updated { navigation } here;

  // const { profile } = useUserProfile();
  const { goal, updateGoal } = useGoalContext(); 
  const [goalType, setGoalType] = useState(goal.type);
  const [goalTarget, setGoalTarget] = useState(goal.target);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveGoal = () => {
    // Save goal information to state management or database

    if (!goalType || !goalTarget) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    updateGoal({
      ...goal,
      type: goalType,
      target: goalTarget,
    });

    // Reset error message
    setErrorMessage('');
  };


  // const [goalType, setGoalType] = useState('');
  // const [goalTarget, setGoalTarget] = useState('');
  const [goalTimeline, setGoalTimeline] = useState('');

  const [goalSet, setGoalSet] = useState(false);
  const [goalSuccess, setGoalSuccess] = useState(false);

  const handleSetGoal = () => {
    // Logic to set the fitness goal

    if (goalType && goalTarget) {
        // Logic to set the fitness goal
        setGoalSet(true);
        setGoalSuccess(true);
      } 
    else {
        setGoalSuccess(false);
      }
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
        <Picker.Item label="Weight Loss" value="weightLoss" />
        <Picker.Item label="Muscle Gain" value="muscleGain" />
        <Picker.Item label="Endurance" value="endurance" />
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
      {/* <br/> */}
      {/* <Button title="Set Goal" onPress={handleSetGoal} /> */}
      <Button title="Save Goal" onPress={handleSaveGoal} />
      <br/>
      <Button title="Go to Activity Logging" onPress={() => navigation.navigate('ActivityLoggingScreen')} /> 

      {/* <br/> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

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

export default GoalSettingScreen;
