
import { View, Text, TextInput, Picker, Button, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';




const UserLoginScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>User Login </Text>
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
                    navigation.navigate('UserSignupScreen'); // Navigate to UserSignupScreen
                }}>
                    <Text style={{ fontWeight: "bold", margin: 10 }} >Sign Up</Text>
                </Pressable>
                <Pressable onPress={() => {
                    navigation.navigate('TrainerLoginScreen'); // Navigate to TrainerLoginScreen
                }}>
                    <Text style={{ fontWeight: "bold", margin: 10 }}>Are You a Trainer ?</Text>
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


export default UserLoginScreen;
