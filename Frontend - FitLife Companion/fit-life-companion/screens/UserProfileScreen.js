import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { StyleSheet } from 'react-native';


const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contactNummber, setContactNummber] = useState('');

  const handleSaveProfile = () => {
    // Logic to save the profile details
  };

  return (
    <View style={styles.container}>
      <Text>User Profile Screen</Text>
      <TextInput style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <TextInput style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput style={styles.input}
        placeholder="Height"
        value={height }
        onChangeText={setHeight }
      />
      <TextInput style={styles.input}
        placeholder="Weight"
        value={weight }
        onChangeText={setWeight }
      />
      <TextInput style={styles.input}
        placeholder="Email"
        value={email }
        onChangeText={setEmail }
      />
      <TextInput style={styles.input}
        placeholder="ContactNummber"
        value={contactNummber }
        onChangeText={setContactNummber }
      />
      <Button title="Save" onPress={handleSaveProfile} />
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

export default UserProfileScreen;
