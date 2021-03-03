/**
 * This file shows the buildup to the game
 * The screen that allows for selection of teams
 */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { View, Text ,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window')

export default class Buildup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homeSelection: 0,
        awaySelection: 0,
    };
  }
  _setAwaySelection = value => this.setState({awaySelection: value})
  _setHomeSelection = value => this.setState({homeSelection: value})

  render() {
    const {route: {params}} = this.props
    const param = params.teams.filter(team => team != params.homeTeam)
    return (
      <View style={styles.mainContainer}>
        <View style={styles.eachTeam}>
            <Text style={styles.teams}>Home Team</Text>
        </View>

        <ScrollView style={{
            height: height - 200,
        }}>
            {param.map((team, i) => <TouchableWithoutFeedback onPress = {() => this._setAwaySelection(team.id)}>
                    <View  style = {[styles.team, (this.state.awaySelection === team.id) ? styles.selected : {}]} key={i}> 
                        <Text style={[styles.teamList, this.state.awaySelection === team.id ? styles.selectionText: {}]}>{team.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </ScrollView>

        <View style={styles.eachTeam}>
            <Text style={styles.teams}>Away Team</Text>
        </View>
        <ScrollView style={{
            height: height - 200,
        }}>
            {param.map((team, i) => <TouchableWithoutFeedback onPress = {() => this._setHomeSelection(team.id)}>
                    <View  style = {[styles.team, (this.state.homeSelection === team.id) ? styles.selected : {}]} key={i}> 
                        <Text style={[styles.teamList, this.state.homeSelection === team.id ? styles.selectionText: {}]}>{team.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </ScrollView>
        <TouchableOpacity onPress={() => {
            const homeId = this.state.homeSelection
            const awayId = this.state.awaySelection
            this.props.navigation.push('Simulation', {
                homeId,
                awayId
            })}
        }>
            <View style={{
                padding: 10,
                backgroundColor: 'white',
                margin: 10,
                borderWidth: .3,
                borderColor: '#eee',
                borderRadius: 4
            }}>
                <Text style={{
                    fontWeight: '900',
                    color: '#444',
                    textAlign: 'center',
                }}>
                    Start Match
                </Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    teams: {
        fontWeight: '900',
        fontSize: 24,
        color: '#444',
    },
    mainContainer: {
        padding: 10
    },
    eachTeam: {
        padding: 10
    },
    team: {
        padding: 15,
        paddingLeft: 30,
    },
    selected: {
        backgroundColor: '#4fb322',
        borderRadius: 8
    },
    selectionText: {
        fontWeight: '700',
        color: 'white'
    }
})