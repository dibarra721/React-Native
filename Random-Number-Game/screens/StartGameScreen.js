import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button , TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from '../components/NumberContainer';


export default function StartGameScreen(props) {

const [enteredValue, setEnteredValue] = useState('')
const [confirmed, setConfirmed] =useState(false)
const [selectedNumber, setSelectedNumber] = useState()


const numberHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]g/))
}

function Reset() {
    setEnteredValue('')
    setConfirmed(false)

}

function Confirm(){
    const chosenNumber= parseInt(enteredValue)
    if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
        Alert.alert(
            'Invalid number!',
             "Number has to be a number between 1 and 99",
              [{text: 'okay', style:'destructive', onPress: Reset}])
        return
    }
setConfirmed(true),
setSelectedNumber(parseInt(enteredValue))
setEnteredValue('');
Keyboard.dismiss()
}
let confirmedOutput;
if(confirmed) {
    confirmedOutput= 
    <Card style={styles.summaryContainer}>
    <Text> You selected:</Text>
    <View>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='Start Game' onPress={() => props.onStartGame(selectedNumber)}/>
    </View>
    </Card>
}



  return (
<TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss()
}}>
    <View style={styles.screen}>
      <Text style={styles.title}> Start a New Game </Text>

      <Card style={styles.input}>
        <Text>Select a Number</Text>
      <Input style={styles.inputStyle}
       blurOnSubmit
       autoCapitalize="none"
        autoCorrect={false} 
        keyboardType="number-pad" 
        maxLength = {2}
        onChangeText= {numberHandler}
        value={enteredValue}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" onPress={Reset} color='red' /></View>
          <View style={styles.button}><Button title="Confirm" onPress={Confirm} color={Colors.accent} /></View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
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
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",

  },
  button:{
width:100
  },
  inputStyle:{
      width:50,
      textAlign:'center'
  },
  summaryContainer:{
      marginTop:20,
      alignItems:'center',

  }
});
