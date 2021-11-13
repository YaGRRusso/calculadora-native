import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component {

  state = {
    displayValue: 0
  }

  addDigit = (n) => {
    this.state.displayValue===0 ? this.state.displayValue=n : n = this.state.displayValue + n
    return this.setState({displayValue: n})
  }

  rmvDigit = () => {
    // let n = this.state.displayValue
    // n===0 ? n=0 : n = n + `${n}`
    // return this.setState({displayValue: n})
  }

  clear = () => {
    return this.setState({displayValue: 0})
  }

  operation = (op) => {
    return null
  }

  render() {
    return (
      <View style={styles.container}>
      <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label={"AC"} triple onClick={this.clear}/>
          <Button label={"÷"} op onClick={this.operation}/>
          <Button label={"7"} onClick={this.addDigit}/>
          <Button label={"8"} onClick={this.addDigit}/>
          <Button label={"9"} onClick={this.addDigit}/>
          <Button label={"*"} op onClick={this.operatio}/>
          <Button label={"4"} onClick={this.addDigit}/>
          <Button label={"5"} onClick={this.addDigit}/>
          <Button label={"6"} onClick={this.addDigit}/>
          <Button label={"-"} op onClick={this.operatio}/>
          <Button label={"1"} onClick={this.addDigit}/>
          <Button label={"2"} onClick={this.addDigit}/>
          <Button label={"3"} onClick={this.addDigit}/>
          <Button label={"+"} op onClick={this.operatio}/>
          <Button label={"⌫"} op onClick={this.rmvDigit}/>
          <Button label={"0"} onClick={this.addDigit}/>
          <Button label={"."} onClick={this.addDigit}/>
          <Button label={"="} op onClick={this.operatio}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderColor: "#f0f0f0"
  }
});
