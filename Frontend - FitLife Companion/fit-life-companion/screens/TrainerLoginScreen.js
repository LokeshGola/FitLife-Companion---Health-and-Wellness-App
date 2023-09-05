import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet,Pressable } from 'react-native';
// import { useUserProfile } from '../contexts/UserProfileContext'; // Update the path
import { useNavigation } from '@react-navigation/native';


const TrainerLoginScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Trainer Login </Text>
                <TextInput style={styles.input}
                    placeholder=" Enter Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput style={styles.input}
                    placeholder=" Enter password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Submit" color={"#045d5d"} onPress={() => { console.warn("pressing me") }} />
            </View>
            <View>
                <Pressable onPress={() => {
                    navigation.navigate('TrainerSignupScreen'); // Navigate to TrainerSignupScreen
                }}>
                    <Text style={{ fontWeight: "bold", margin: 10 }} >Sign Up</Text>
                </Pressable>
                <Pressable onPress={() => {
                    navigation.navigate('UserLoginScreen'); // Navigate to UserLoginScreen
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
        alignItems: "center",
        // backgroundColor: "#b7d9c9"
        backgroundColor: "#edecd8"
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
        borderColor: "black",
        borderRadius: 5,
    },
    picker: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    card: {
        justifyContent: "center",
        width: "90%",
        height: 220,
        padding: 10,
        backgroundColor: "#b7d9c9",
        borderRadius: 5,
    },
    button: {
        color: "#045d5d",
        backgroundColor: "#045d5d",
    },
});


export default TrainerLoginScreen;
