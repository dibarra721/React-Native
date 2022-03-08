import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Start a New Game </Text>

      <View style={styles.input}>
        <Text>Select a Number</Text>
        <TextInput />

        <View style={styles.button}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor:'#DFEFCA',
    shadowOffset:{ width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.87,
    backgroundColor:'white',
    paddingTop: 10,
    padding:5,
    borderRadius: 10

  },
});
