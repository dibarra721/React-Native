import React, {useState} from 'react'
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from './screens/GameOver';


// function FetchFonts(){
//   Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }

export default function App() {
  
const [userNumber, setUserNumber] = useState()
const [guessRounds, setGuessRounds]= useState(0)
const [dataLoaded, setDataLoaded]= useState(false)

// if(!dataLoaded){
//   return <AppLoading
//    startAsync={FetchFonts}
//     onFinish={()=> setDataLoaded(true)}
//     onError={(err) => console.log(err)}/>
// }

function NewGame() {
  setGuessRounds(0)
  setUserNumber(null)


}

const startGameHandler= (selectedNumber) => {
  setUserNumber(selectedNumber)
 
}

function GameOver(numOfRounds){
  setGuessRounds(numOfRounds)

}


let content= <StartGameScreen onStartGame= {startGameHandler}/> 

if (userNumber && guessRounds <= 0) {
  content = <GameScreen userChoice={userNumber} onGameOver={GameOver}/>

} else if (guessRounds > 0){
  content= <GameOverScreen 
  roundsNumber={guessRounds}
   userNumber={userNumber} 
   onRestart={NewGame}/>
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
