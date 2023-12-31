

import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { useNavigation } from '@react-navigation/native';
// import { FitnessItems } from "../Context";

const HomeScreen = () => {
  //   const {

  //     minutes,

  //     calories,

  //     workout,
  //   } = useContext(FitnessItems);

  const navigation = useNavigation();

  return (
    <ScrollView style={{ marginTop: 40, backgroundColor: "#ebedd7" }}>
      <View
        style={{
          backgroundColor: "#007c7c",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 22,
              }}
              onPress={() => {
                navigation.navigate('UserDashBoard'); // Navigate to UserDashBoardScreen
              }}
            >
              User
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 22,
              }}
              onPress={() => {
                navigation.navigate('TrainerDashBoard'); // Navigate to TrainerDashBoard;
              }}
            >
              Trainer
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
