import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize:30,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#333',
    padding: 20,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#333',
    color: "#f0f0f0"
  },
  operationButton: {
    color: "#FF9934"
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
})

export default (props) => {
  const stylesButton = [styles.button]
  props.double ? stylesButton.push(styles.buttonDouble) : null
  props.triple ? stylesButton.push(styles.buttonTriple) : null
  props.op ? stylesButton.push(styles.operationButton) : null

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}