import React, { useState } from 'react';
import {spacing} from '../utils/sizes'
import {ProgressBar} from 'react-native-paper'
import { View, Text, StyleSheet,Vibration} from 'react-native';
import {Countdown} from '../components/Countdown';
import {colors} from '../utils/Colors'
import { RoundButton } from '../components/RoundButton';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];


export default function Timer(props) {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress]=useState(1)
  const [minutes, setMinutes]=useState(0.1)



  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
        minutes={minutes}
        isPaused ={!isStarted}
      
        onProgress={setProgress} 
         onEnd={() => {
            Vibration.vibrate(PATTERN)
          }}
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
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundButton title="pause" onPress={() => setIsStarted(false)} />
        )}
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
textAlign:'center'
  },
  task:{
    color:colors.dark,
    textAlign:'center'


  }
});
