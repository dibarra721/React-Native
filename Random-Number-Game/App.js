import React, {useState} from 'react'

import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from './screens/GameOver';

export default function App() {

const [userNumber, setUserNumber] = useState()
const [guessRounds, setGuessRounds]= useState(0)

const startGameHandler= (selectedNumber) => {
  setUserNumber(selectedNumber)
  setGuessRounds(0)
}

function GameOver(numOfRounds){
  setGuessRounds(numOfRounds)

}



let content= <StartGameScreen onStartGame= {startGameHandler}/> 
if (userNumber && guessRounds <= 0) {
  content = <GameScreen userChoice={userNumber} onGameOver={GameOver}/>

} else if (guessRounds > 0){
  content= <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber}/>
}


  return (
    <View style={styles.screenView}>
      <Header title="Guess a Number" />
   {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
  },
});
