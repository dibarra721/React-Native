import React, { useState} from 'react'
import {View, StyleSheet, Text, Button} from "react-native"

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

export default function GameScreen(props){
    
    const [currentGuess, setCurrentGuess ]= useState(generateRandomBetween(1,100, props.userChoice))




function generateRandomBetween (min, max, exclude) {
min= Math.ceil(min);
max = Math.floor(max);
const randomNum= Math.floor(Math.random() * ( max-min)) + min
if(randomNum === exclude){
    return generateRandomBetween(min, max, exclude)
}
else {
    return randomNum
}

}


    return(
<View style={styles.screen}>

    <NumberContainer> {currentGuess}</NumberContainer>
<Card style= {styles.buttonContainer}>
    
    <Button title='Lower' onPress={() => { }}/>
    <Button title='Greater' onPress={() => { }}/>

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