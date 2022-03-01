import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

export default function GoalInput(props) {
  const [goal, setGoal] = useState("");

  function goalInput(enteredText) {
    setGoal(enteredText);
  }


  function addGoalHandler () {
      props.onAddGoal(goal);
      setGoal('')
  }

 
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your Goal"
          style={styles.input}
          onChangeText={goalInput}
          value={goal}
        />
        <View style={styles.button}>
            <View style={styles.cancel}>
        <Button title=" Cancel"  color="white" onPress={props.onCancel}/>
        </View>
        <View style={styles.add}>
        <Button title="Add Goal"  color="white" onPress={addGoalHandler} />
        </View>
      </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    padding: 10,
  },
  button:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'60%',
    //   borderColor:'green',
    //   borderWidth:1,
      marginTop:5,
  },
  cancel:{
      borderColor:'white',
      borderWidth:1,
      backgroundColor:'red',
      
  },
  add:{
      backgroundColor:'blue',
      borderColor:'white',
      borderWidth:1,
  }

})
