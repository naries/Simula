import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ShadowedCirle from '../components/ShadowedCirle'
import { Teams } from '../lib/Teams'

import { Weeks } from '../lib/Weeks'

export default class League extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View>
          <View style = {styles.topic}>
            <Text style={styles.topicText}> Fixtures </Text>
            <ScrollView>
                {Weeks.map((fixtures, i) => <View key={i}> 
                    <View style={{backgroundColor: '#ccc', padding: 10, borderWidth: .5, borderColor:'white', marginTop: 10}}>
                        <Text style={{color: '#666', fontWeight:'800'}}>Week { i + 1 }</Text>
                    </View>
                    {fixtures.map((match, i) => <View key={i} style={styles.teamStand}>
                        <View style={styles.homeTeam}>
                            <View style={styles.customizeName}>
                                <Text style={styles.teamName, styles.rightAlign}>{Teams[match.home - 1].name} </Text>
                            </View>
                            <ShadowedCirle size={40}><Text style={{fontWeight: 'bold', fontSize: 18, color: '#019837'}}></Text></ShadowedCirle>
                        </View>
                        <View style={styles.awayTeam}>
                            <ShadowedCirle size={40}><Text style={{fontWeight: 'bold', fontSize: 18, color: '#019837'}}></Text></ShadowedCirle>
                            <View style={styles.customizeName}>
                                <Text style={styles.teamName, styles.leftAlign}> {Teams[match.away - 1].name}</Text>
                            </View>
                        </View>
                    </View>)
                    }
                    </View>)
                }

            </ScrollView>

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    topic: {
        padding: 20
    }, 
    topicText: {
        color: '#666',
        fontSize: 18,
        fontWeight: '700'
    },
    timeProvider: {
        textAlign: "center",
        fontWeight: 'bold',
        color: '#666',
        fontSize: 12
    },
    timerInfo: {
        borderBottomWidth: .5,
        borderBottomColor: '#aaa',
        padding: 5
    },

    button: {
        margin: 5,
        padding: 5,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: '#fff',
        backgroundColor: 'red'
    },
    buttonText: {
        color: "white",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    teamStand: {
        flexDirection: 'row',
    },
    teamName: {
        fontSize: 16,
        color: '#888'
    },
    homeTeam: {
        padding: 10,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    awayTeam: {
        padding: 10,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    rightAlign: {
        textAlign: 'right',
        fontSize: 14,
    },
    leftAlign: {
        textAlign: 'left',
        fontSize: 13,
    },
    customizeName: {
        flex: 1, 
        justifyContent: 'center', 
        padding: 10
    },
    matchInfo: {
        paddingHorizontal: 30
    },
    menu: {
        color: '#666',
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuSorround: {
        padding: 5
    }
})