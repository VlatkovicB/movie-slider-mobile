import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "screens/Home";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackNavigatorParam = {};

const { Navigator, Screen } = createStackNavigator();

const RootStackNavigator = () => (
  <NavigationContainer>
    <Navigator>
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Navigator>
  </NavigationContainer>
);

export default RootStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
