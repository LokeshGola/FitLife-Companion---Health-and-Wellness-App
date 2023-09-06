import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';
import { useUserProfile } from '../contexts/UserProfileContext'; // Update the path


const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); //Default value

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContact_number] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleSaveProfile = async () => {
    // // Logic to save the profile details
    // // Save profile information to state management or database
    // // For now, you can just log the values
    // console.log('Name:', name);
    // console.log('Age:', age);
    // console.log('Gender:', gender);

    // // Save profile information to the context
    // updateProfile({
    //   ...profile,
    //   name,
    //   age,
    //   gender,
    // });

    if (!name || !age || !gender || !height || !weight || !email || !contact_number) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/users/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          age,
          gender,
          height,
          weight,
          email,
          contact_number,
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
        
        if(responseBody.email==["user with this email already exists."]){
          setSuccessMessage("user with this email already exists.")
        }else{
          setSuccessMessage("Something went wrong. Profile not saved successfully")
        }
        
      }
    } catch (error) {
      console.error('API request error:', error);
    }

    // Reset error message
    setErrorMessage('');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Profile Details</Text>
      <Text style={styles.errorText}>{errorMessage}</Text>
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
        placeholder="Contact Number"
        value={contact_number }
        onChangeText={setContact_number }
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


export default UserProfileScreen;
