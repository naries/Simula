import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'


export class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false
    }
  }

  _setIsFocused = (set) => {
    this.setState({isFocused: set})
  }

  render() {
    return (
      <View style={[styles.input, {borderBottomColor: this.state.isFocused ? '#1066ff': 'gainsboro'}]}>
        <View style={{flex:1, alignItems: "center", justifyContent: 'center'}}>
          {this.props.icon}
        </View>
        <View style={{flex: 6, justifyContent: 'center'}}>
          <TextInput 
            onFocus = {() => this._setIsFocused(true)} 
            onBlur={() => this._setIsFocused(false)} 
            style={styles.textInput}
            placeholder={this.props.placeholder}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    // flex:1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gainsboro',
    backgroundColor: 'transparent',
    color: "white",
    marginVertical: 5,
  },
  textInput: {
    fontSize: 18,
  },
})