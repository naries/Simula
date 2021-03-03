import React, { Component } from 'react'
import styles from '../assets/styles/Main'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Teams } from '../lib/Teams'

const {height, width} = Dimensions.get('window')

const _formTeams = () => {
    for (var team in Teams) {
        teams.push({id: Teams[team].id, name: Teams[team].name})
    }
}

let teams = []
_formTeams()

const playerList = [
    {
        name: 'Bernd Leno',
        position: 'GK',
        rating: 84,
        morale: 100,
    },    {
        name: 'David Luiz',
        position: 'CB',
        rating: 84,
        morale: 54,
    },    {
        name: 'Pablo Mari',
        position: 'CB',
        rating: 84,
        morale: 54,
    },    {
        name: 'Hector Bellerin',
        position: 'RB',
        rating: 84,
        morale: 54,
    },    {
        name: 'Kieran Tierney',
        position: 'LB',
        rating: 84,
        morale: 54,
    },    {
        name: 'Granit Xhaka',
        position: 'DM',
        rating: 84,
        morale: 54,
    },    {
        name: 'Dani Ceballos',
        position: 'CM',
        rating: 84,
        morale: 54,
    },  {
        name: 'Ainsley Maitland Niles',
        position: 'CM',
        rating: 84,
        morale: 54,
    },  {
        name: 'Nicolas Pepe',
        position: 'AMR',
        rating: 84,
        morale: 54,
    },    {
        name: 'Alexander lacazette',
        position: 'CF',
        rating: 84,
        morale: 54,
    },    {
        name: 'Pierre-Emerick Aubameyang',
        position: 'AML',
        rating: 84,
        morale: 54,
    },
]
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        pI: false,
        staff: false,
        training: false,
        players: false
    }
  }

  _setPlayers = () => {
      this.setState({players: !this.state.players})
  }

  _setPI = () => {
      this.setState({pI: !this.state.pI})
  }

  _setStaff = () => {
      this.setState({staff: !this.state.staff})
  }

  _setTraining = () => {
      this.setState({training: !this.state.training})
  }

  render() {
    const {Nunito, NunitoBold, OpenSans, NunitoSemiBold} = this.props
    return (
      <View>
          {/* <TopView {...this.props} text='Ma' title='Manager'/> */}
            <View style={styles.bottomCard}>
                <View style={[styles.flexBox, styles.bottomPad, {paddingBottom: 5}]}>
                    <View>
                        <View style={styles.subTitleCover}>
                            <Text style={[styles.subTitle, NunitoBold]}>Grande Options</Text>
                        </View>
                    </View>
                </View>
                <ScrollView 
                    style={{maxHeight: height - 100}}
                    showsVerticalScrollIndicator= {false}>
                    
                    <TouchableOpacity onPress = {() => {
                        this.props.navigation.navigate('Buildup', {
                            homeTeam: 'Arsenal',
                            teams: teams
                        })
                    }}>
                        <View style={[styles.draw, ]}>
                            <View style={{marginBottom: 0}}>
                                <Text style={[styles.subSubTitle, NunitoSemiBold]}>Play Match</Text>
                                <Text style={[styles.smallInfo, OpenSans]}>Simulate a fixture</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <View style={{marginHorizontal: 20, position: 'fixed', bottom: 0, left: 0, right: 0}}>
                    <View style={{}}>
                        <Text style={[styles.smallInfo, OpenSans, {textAlign: 'center', lineHeight: 35, color: '#999'}]}>From Simula</Text>
                    </View>
                </View>
            </View>
      </View>
    )
  }
}

export default Profile