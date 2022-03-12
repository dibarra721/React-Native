import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {colors} from '../utils/Colors'


export default function FocusHistory(props){
if(!props.history || !props.history.length) return null

return(

<View>
<Text style={styles.title}>
history will be here
</Text>
</View>

)


}

const styles=StyleSheet.create({
title:{
color:colors.light,
fontSize: 20
}

})