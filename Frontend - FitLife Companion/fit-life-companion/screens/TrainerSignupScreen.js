
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Pressable } from 'react-native';

import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TrainerSignupScreen = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState('');
    const [email, setEmail] = useState('');
    const [contactNummber, setContactNummber] = useState('');

    // navigation
    const navigation = useNavigation();

    const handleSaveProfile = () => {
        // Logic to save the profile details
        // Save profile information to state management or database
        // For now, you can just log the values
        console.log('Name:', name);
        console.log('Gender:', gender);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Trainer Signup</Text>
                <TextInput style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

                <Picker style={styles.picker}
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                <TextInput style={styles.input}
                    placeholder="Specialization"
                    value={specialization}
                    onChangeText={setSpecialization}
                />
                <TextInput style={styles.input}
                    placeholder="Experience"
                    value={experience}
                    onChangeText={setExperience}
                />
                <TextInput style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput style={styles.input}
                    placeholder="ContactNummber"
                    value={contactNummber}
                    onChangeText={setContactNummber}
                />
                <Button title="Save" color={"#045d5d"} onPress={handleSaveProfile} />
            </View>
            <View>
                {/* <Pressable onPress={() => {
                    navigation.navigate('TrainerSignupScreen'); // Navigate to TrainerSignupScreen
                }}>
                    <Text style={{ fontWeight: "bold", margin: 10 }} >Sign Up</Text>
                </Pressable> */}
                <Pressable onPress={() => {
                    navigation.navigate('UserSignupScreen'); // Navigate to UserSignupScreen
                }}>
                    <Text style={{ fontWeight: "bold", margin: 10 }}>Are You a User ?</Text>
                </Pressable>

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
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
    picker: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: "#b7d9c9"
    },
    card: {
        // justifyContent: "center",
        width: "90%",
        height: 450,
        padding: 10,
        backgroundColor: "#b7d9c9",
        borderRadius: 5,
    },
});


export default TrainerSignupScreen;
