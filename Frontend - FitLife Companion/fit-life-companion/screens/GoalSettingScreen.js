import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet  } from 'react-native';

// import { useUserProfile } from '../contexts/UserProfileContext'; // Update the path
// import { useGoalContext } from './path/to/GoalContext'; // Update the path to your goal context


const GoalSettingScreen = ({ navigation }) => {  // updated { navigation } here;

  // const { profile } = useUserProfile();
  // const { goal, updateGoal } = useGoalContext(); // Not implemented yet;

  // const [goalType, setGoalType] = useState(goal.type);
  // const [goalTarget, setGoalTarget] = useState(goal.target);

  // const handleSaveGoal = () => {
  //   // Save goal information to state management or database
  //   updateGoal({
  //     ...goal,
  //     type: goalType,
  //     target: goalTarget,
  //   });
  // };


  const [goalType, setGoalType] = useState('');
  const [goalTarget, setGoalTarget] = useState('');
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
      <Text>Goal Setting Screen</Text>
      <Picker style={styles.input}
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
      <Button title="Set Goal" onPress={handleSetGoal} />
      {/* <br/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default GoalSettingScreen;
