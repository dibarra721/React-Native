import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/Colors';
import {fontSizes} from '../utils/sizes'

export default function FocusHistory(props) {
  if (!props.history || !props.history.length) return null;

const renderItem = ({item}) => < Text style={styles.item} > {item}</ Text>



  return (
    <View styles={styles.container}>
      <Text style={styles.title}>The things we have previously focused on</Text>
      <FlatList 
      data={props.history}
      renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.light,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item:{
    fontSize: fontSizes.md,
    color:colors.light
  },
  container:{
    flex:1
  }
});
