import React, { useState } from 'react';
import {spacing} from '../utils/sizes'
import {ProgressBar} from 'react-native-paper'
import { View, Text, StyleSheet,Vibration} from 'react-native';
import {Countdown} from '../components/Countdown';
import {colors} from '../utils/Colors'
import { useKeepAwake } from 'expo-keep-awake';

import { RoundButton } from '../components/RoundButton';
import Timing from './Timing'


const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export default function Timer(props) {

  useKeepAwake()

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress]=useState(1)
  const [minutes, setMinutes]=useState(0.1)

function onEnd(){
   Vibration.vibrate(PATTERN)
   setIsStarted(false)
   setProgress(1)
   props.onTimerEnd(props.focusSubject)
   
}


  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
        minutes={minutes}
        isPaused ={!isStarted}
      
        onProgress={setProgress} 
         onEnd={onEnd}
          />
      </View>

<View style={{paddingTop:spacing.xxl}}>
<Text style={styles.title}>Focusing on: </Text>
<Text style={styles.task}> {props.focusSubject} </Text>

</View>

<View style={{paddingTop:spacing.sm}}>
<ProgressBar
progress={progress}
color={colors.barColor} style={{height:spacing.sm}}/>
</View>
      <View style={styles.timingWrapper}>
      <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
<View style={styles.clearSubjectWrapper}>
        <RoundButton size={50} title="-" onPress={props.clearSubject} />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA62B',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
color:colors.light,
fontWeight:"bold",
textAlign:'center',
fontSize: 20
  },
  task:{
    color:colors.dark,
    fontSize:15,
    textAlign:'center'
  },
  timingWrapper:{
    padding:spacing.md,
    flex:0.1,
    flexDirection:'row'
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
