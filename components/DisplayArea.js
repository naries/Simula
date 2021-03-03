import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

class DisplayArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    

  render() {
    const { countdown, hDP, commentary, formedTime} = this.props
    return (
        <View style={styles.field}>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={styles.fieldBars}></View>
            <View style={{
                backgroundColor: 'rgba(0,0,0,.5)',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: (countdown / 9)+'%'
            }}></View>
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, .10)',
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    flexDirection: 'row'
                }}>
                    <ScrollView style={{flex: 1, margin: 10, height: '100%'}}>
                        {commentary.map((comm, i) => {
                            if(comm.action === 'goal' && comm.teamChosenNumber >= hDP) {
                                return <Text key = {i} style={{color: 'white', fontSize: 10}}>{comm.actor.name} {comm.time}'</Text>                                    
                            }
                        })}
                    </ScrollView>
                    <ScrollView style={{flex: 1, margin: 10, height: '100%'}}>
                        {commentary.map((comm, i) => {
                            if(comm.action === 'goal' && comm.teamChosenNumber < hDP){
                                return <Text key = {i} style={{color: 'white', fontSize: 10, textAlign: 'right'}}>{comm.actor.name} {comm.time}'</Text>
                            }
                        })}
                    </ScrollView>
                </View>
                <View style={styles.timerSorround}>
                    <Text style={styles.timer}>
                        {formedTime}
                    </Text>
                </View>
        </View>
    )
  }
}

export default DisplayArea

const styles = StyleSheet.create({
    timerSorround: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    timer: {
        fontSize: 50,
        color: '#f9f9f9',
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold'
    },
    field: {
        flexDirection: 'row',
        justifyContent: "space-around",
        position: 'relative',
        backgroundColor: '#009900',
        height: 100
    },
    fieldBars: {
        backgroundColor: '#00aa00',
        width: 10,
    },
})
