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

    return(
        <View>
            <Text>Welcome to the Fit-Life App !</Text>
            <Button title="User" onPress={navigateToUserDashBoard} />
            <br/>
            <Button title="Trainer" onPress={navigateToTrainerDashBoard} />
        </View>
    );
}

export default Welcome;