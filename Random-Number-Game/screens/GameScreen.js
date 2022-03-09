import React, { useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert} from "react-native"
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

export default function GameScreen(props){
    
    const [currentGuess, setCurrentGuess ]= useState
    (generateRandomBetween(1,100, props.userChoice))

    const currentLow= useRef(1);
    const currentHigh= useRef(100)

    const [rounds, SetRounds]= useState(0)
    const {userChoice, onGameOver }= props

    useEffect(() => { 
        if( currentGuess === props.userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess,userChoice, onGameOver ])


function generateRandomBetween (min, max, exclude) {
min= Math.ceil(min);
max = Math.floor(max);
const randomNum= Math.floor(Math.random() * (max - min)) + min
if(randomNum === exclude) {
    return generateRandomBetween(min, max, exclude)
}
else {
    return randomNum
}

}

function NextGuess(direction) {
if(
    (direction === 'lower' && currentGuess < props.userChoice) ||
 ( direction === 'greater' && currentGuess > props.userChoice)
 ){
     Alert.alert("Don't lie!", 'You know that this is wrong...', [
          { text: 'Sorry!', style: 'cancel' }
        ]);
return;
} 
if ( direction === 'lower'){
    currentHigh.current= currentGuess;
} else {
    currentLow.current= currentGuess
}
const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
setCurrentGuess(nextNumber)
SetRounds(curRounds => curRounds +1)
}



return(
<View style={styles.screen}>

    <NumberContainer> {currentGuess}</NumberContainer>
<Card style= {styles.buttonContainer}>
    
    <Button title='Lower' onPress={() => NextGuess('lower')}/>
    <Button title='Greater' onPress={() => NextGuess('greater')}/>

</Card>
</View>

    )
}






const styles= StyleSheet.create({
screen:{
    flex:1,
    padding:10,
    alignItems:'center'
},
buttonContainer:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop:20,
    width:300,
    maxWidth:'80%'
}

})