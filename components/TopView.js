import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import styles from '../assets/styles/Main'
import { View, Text } from 'react-native'

export default class TopView extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {Nunito, NunitoBold, OpenSans, NunitoSemiBold} = this.props

    return (
      <View>
        <View style={styles.topBar}>
            <View style={styles.abbr}>
                <Text style={[NunitoSemiBold, styles.abbrText]}>{this.props.text}</Text>
            </View>
            <View>
              {/* <Text style={styles.title}>{this.props.title}</Text> */}
            </View>
        </View>
      </View>
    )
  }
}
