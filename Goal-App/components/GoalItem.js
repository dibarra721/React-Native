import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "pink",
    borderColor: "red",
    margin: 10,
    borderWidth: 1,
  },
});
