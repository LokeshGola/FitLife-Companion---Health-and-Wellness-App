import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, ScrollView, StyleSheet } from 'react-native';

const WorkoutPlanScreen = () => {
    const [planName, setPlanName] = useState('');
    const [goal, setGoal] = useState('');       // default value;
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [trainerId, setTrainerId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleSavePlan = async () => {
        // Handle saving the Workout Plan data to your backend or storage.
        // You can use a state management library like Redux or context API to manage the data.
        if (!planName || !goal || !duration || !description || !trainerId) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/workoutplans/create/${trainerId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "plan_name": planName,
                    "goal": goal,
                    "duration": duration,
                    "description": description,
                }),
            });
            console.log(response)
            if (response.status === 201) {
                console.log('Plan created successfully');
                // You can navigate to another screen or perform any additional actions here
                // alert("Profile saved successfully")
                setSuccessMessage("Plan created successfully")
            } else {
                console.error('Error creating workout plan. Status:', response.status);
                const responseBody = await response.text();
                console.error('Response body:', responseBody);
                // alert("Something went wrong. Profile not saved.")

                setSuccessMessage("Something went wrong. Workout Plan not created successfully")
            }
        } catch (error) {
            console.error('API request error:', error);
        }
        // Reset error message
        setErrorMessage('');

        // Navigate to another screen or perform other actions

    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> Workout Plan</Text>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <TextInput style={styles.input}
                placeholder="Enter Plan Name"
                value={planName}
                onChangeText={(text) => setPlanName(text)}
            />

            {/* <Text>Goal</Text> */}
            <Picker style={styles.picker}
                selectedValue={goal}
                onValueChange={(itemValue) => setGoal(itemValue)}
            >
                <Picker.Item label="Select Goal" value="" />
                <Picker.Item label="Weight Loss" value="Weight Loss" />
                <Picker.Item label="Muscle Gain" value="Muscle Gain" />
                <Picker.Item label="Cardio Fitness" value="Cardio Fitness" />
                {/* Add more options as needed */}
            </Picker>

            {/* <Text >Duration (weeks)</Text> */}
            <TextInput style={styles.input}
                placeholder="Enter Duration"
                keyboardType="numeric"
                value={duration}
                onChangeText={(text) => setDuration(text)}
            />

            {/* <Text>Description</Text> */}
            <TextInput style={styles.input}
                placeholder="Enter Description"
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <TextInput style={styles.input}
                placeholder="Enter Trainer Id"
                keyboardType="numeric"
                value={trainerId}
                onChangeText={(text) => setTrainerId(text)}
            />
            <Button title="Save Plan" onPress={handleSavePlan} />
            <br />
            <Text style={styles.successText}>{successMessage}</Text>

        </ScrollView>
    );
};

export default WorkoutPlanScreen;

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
    successText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        color: "green"
    },
});
