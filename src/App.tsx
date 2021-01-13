import { StatusBar } from "expo-status-bar";
import RootStackNavigator from "navigation/RootStackNavigator";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <RootStackNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
