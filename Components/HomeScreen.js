
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the HomeScreen component</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Text>Consultez le menu !</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;