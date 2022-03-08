import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card(props) {
  return <View style={{...styles.card, ...props.style}}>
      
      {props.children}
      
      </View>;
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#DFEFCA",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.87,
    backgroundColor: "white",
    paddingTop: 10,
    padding: 5,
    borderRadius: 10,
  },
});
