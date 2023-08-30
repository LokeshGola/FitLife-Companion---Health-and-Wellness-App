
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

import { StyleSheet } from 'react-native';


const TrainerProfileScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(''); 
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [contactNummber, setContactNummber] = useState('');

  const handleSaveProfile = () => {
    // Logic to save the profile details
    // Save profile information to state management or database
    // For now, you can just log the values
    console.log('Name:', name);
    console.log('Gender:', gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trainer Profile Screen</Text>
      <TextInput style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      
      {/* <TextInput style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      /> */}

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
        value={specialization }
        onChangeText={setSpecialization }
      />
      <TextInput style={styles.input}
        placeholder="Experience"
        value={experience }
        onChangeText={setExperience }
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

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     input: {
//       width: '80%',
//       height: 40,
//       borderWidth: 1,
//       marginBottom: 10,
//       paddingHorizontal: 10,
//     },
//   });

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
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});


export default  TrainerProfileScreen ;
