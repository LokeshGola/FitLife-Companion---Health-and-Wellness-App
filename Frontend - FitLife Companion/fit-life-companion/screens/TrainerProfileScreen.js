
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
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSaveProfile = async () => {
    // Logic to save the profile details
    // Save profile information to state management or database
    if (!name || !gender || !specialization || !experience  || !email || !contactNummber) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/trainers/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name":name,
          "gender":gender,
          "specialization":specialization,
          "experience":experience,
          "email":email,
          "contact_number":contactNummber,
        }),
      });
      console.log(response)
      if (response.status === 201) {
        console.log('Profile saved successfully');
        // You can navigate to another screen or perform any additional actions here
        // alert("Profile saved successfully")
        setSuccessMessage("Profile saved successfully")
      } else {
        console.error('Error saving profile. Status:', response.status);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
        // alert("Something went wrong. Profile not saved.")
        setSuccessMessage("Something went wrong. Profile not saved successfully")
      }
    } catch (error) {
      console.error('API request error:', error);
    }

    // Reset error message
    setErrorMessage('');
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trainer Profile </Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
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
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <TextInput style={styles.input}
        placeholder="Specialization"
        value={specialization }
        onChangeText={setSpecialization }
      />
      <TextInput style={styles.input}
        placeholder="Experience (Year)"
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
      <br/>
      <Text style={styles.successText}>{successMessage}</Text>
    </View>
  );
};

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
  successText:{
    fontWeight: "bold",
    fontSize:20,
    marginBottom: 10,
    color:"green"
  },
});


export default  TrainerProfileScreen ;
