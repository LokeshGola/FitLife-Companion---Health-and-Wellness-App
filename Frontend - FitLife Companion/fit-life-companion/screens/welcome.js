import { View, Text, Button } from "react-native";
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
        <View>
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