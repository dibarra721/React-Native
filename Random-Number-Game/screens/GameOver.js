import React, { useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert} from "react-native"



export default function GameOverScreen(props){

    return(
        <View style={styles.screen}>

            <Text>The Game is Over</Text>
            <Text> Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber} </Text>
            <Button title='New Game' onPress={}/>
        </View>
    )
}



const styles= StyleSheet.create ({
screen:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
}

})