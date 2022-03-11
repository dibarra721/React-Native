import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/Colors';
import { TextInput } from 'react-native-paper';
import { RoundButton } from '../components/RoundButton';
import { spacing } from '../utils/sizes';

export default function Focus(props) {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What Do You Want to Focus on ? "
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundButton
            title="+"
            size={50}
            onPress={() => props.addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'end',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
