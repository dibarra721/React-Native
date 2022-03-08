import React from 'react'
import { TextInput , StyleSheet} from 'react-native'

export default function Input(props) {
return (
    <TextInput {...props} style={{...styles.input, ...props.style}}/>
)


}

const styles= StyleSheet.create({
input:{
    height:30,
    borderBottomColor:'#002400',
    borderBottomWidth:1,
    marginVertical:10
}



})