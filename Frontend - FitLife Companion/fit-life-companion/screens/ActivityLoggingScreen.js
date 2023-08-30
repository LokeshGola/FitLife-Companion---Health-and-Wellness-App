// // ActivityLoggingScreen.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


// const ActivityLoggingScreen = ({ navigation }) => {
//     const [date, setDate] = useState('');
//     const [selectedPlan, setSelectedPlan] = useState('');
//     const [activity, setActivity] = useState('');
//     const [duration, setDuration] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
  
//     const handleSaveLog = () => {
//       if (!date || !selectedPlan || !activity || !duration) {
//         setErrorMessage('Please fill in all fields.');
//         return;
//       }
  
//       // Save log information to state management or database
//       // For now, you can just log the values
//       console.log('Date:', date);
//       console.log('Selected Plan:', selectedPlan);
//       console.log('Activity:', activity);
//       console.log('Duration:', duration);
  
//       // Reset error message
//       setErrorMessage('');
  
//       // Navigate to another screen or perform other actions
//     };
  
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Activity Logging</Text>
//         <Text style={styles.errorText}>{errorMessage}</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Date"
//           value={date}
//           onChangeText={setDate}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Selected Plan"
//           value={selectedPlan}
//           onChangeText={setSelectedPlan}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Activity"
//           value={activity}
//           onChangeText={setActivity}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Duration"
//           value={duration}
//           onChangeText={setDuration}
//         />
//         <Button title="Save Log" onPress={handleSaveLog} />
//         <Button title="Go to Fitness Goal Setting" onPress={() => navigation.navigate('GoalSettingScreen')} />
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//     },
//     input: {
//       marginBottom: 15,
//       padding: 10,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       backgroundColor: 'white',
//     },
//     errorText: {
//       color: 'red',
//       marginBottom: 10,
//     },
//   });
  
//   export default ActivityLoggingScreen;
  

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