import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: "#333",
    alignItems: "flex-end"
  },
  displayValue: {
      fontSize: 40,
      color: "#fff"
  }
})

export default (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue}>{props.value}</Text>
    </View>
  )
}