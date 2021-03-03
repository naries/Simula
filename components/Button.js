import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <View>
                    <Text style={styles.buttonText}>Sign In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1066FF',
        paddingHorizontal:15,
        paddingVertical: 10,
        textAlign: 'center',
        borderRadius: 20,
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white', 
        textAlign: 'center'
    }
})