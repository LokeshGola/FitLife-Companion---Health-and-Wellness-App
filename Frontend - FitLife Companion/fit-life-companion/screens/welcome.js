import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Welcome=()=>{

    const navigation= useNavigation();

    const navigateToUserDashBoard = () => {
        navigation.navigate('UserDashBoard'); // Navigate to UserDashBoardScreen
    };
    const navigateToTrainerDashBoard = () => {
        navigation.navigate('TrainerDashBoard'); // Navigate to TrainerDashBoardScreen
    };

    const navigateToUserLoginScreen = () => {
        navigation.navigate('UserLoginScreen'); // Navigate to TrainerDashBoardScreen
    };

    const navigateToHomeScreen = () => {
        navigation.navigate('HomeScreen'); // Navigate to HomeScreen
    };

    return(
        <View style={styles.container} >
            <Text>Welcome to the Fit-Life App !</Text>
            <Button title="User" onPress={navigateToUserDashBoard} />
            <br/>
            <Button title="Trainer" onPress={navigateToTrainerDashBoard} />
            <br/>
            <Button title="User Login" onPress={navigateToUserLoginScreen} />
            <br/>
            <Button title="Home Screen" onPress={navigateToHomeScreen} />
        </View>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // alignItems: "center",
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
