/** The simulation screen */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ShadowedCirle from '../components/ShadowedCirle'
import SmallPlayer from './SmallPlayer'
import { _generateSimulationTeam } from '../lib/Team'
import { __commentarySelectorEngine } from '../lib/engines/CommentarySelector'
import DisplayArea from '../components/DisplayArea'

// merges commentary with the name of the player as well as the action
const buildCommentary = (actor, commentary) => {
    if(commentary.fix){
        return actor.name + commentary.toFix + commentary.comment
    }
    return commentary.comment
}

// function to calculate the goalkeeper quality
const getGoalKeeperQuality = (gk) => {
    return Math.floor(((gk.composure + gk.positioning + gk.confidence) / 30000) * 100)
}

// Possible actions
const Actions = [
    'corner',
    'throw in',
    'goal',
    'over',
    'off the post',
    'wide',
    'save',
]

let minutes = 0



class Simulation extends Component {
  constructor(props) {
    super(props)

    const {route: {params: {homeId, awayId}}} = this.props

    const Simula = _generateSimulationTeam(awayId - 1, homeId - 1)
    
    const goalees = {
        home: getGoalKeeperQuality(Simula.homeGoalKeeper.attributes),
        away: getGoalKeeperQuality(Simula.awayGoalKeeper.attributes)
    }

    // Import home player list
    this.playerList = [
        ...Simula.homePlayers, {
            name: Simula.homeGoalKeeper.name,
            shirtNumber: Simula.homeGoalKeeper.shirtNumber,
            position: 'GK',
            morale: 32,
            rating: goalees.home
    }]
    
    // import away player list
    this.awayPlayerList = [
        ...Simula.awayPlayers, {
            name: Simula.awayGoalKeeper.name,
            shirtNumber: Simula.awayGoalKeeper.shirtNumber,
            position: 'GK',
            morale: 56,
            rating: goalees.away
        }
    ]
    
    this.SimulationTeam = Simula


    this.state = {
        countdown: 0,
        halfTime: false,
        minutes: 0,
        home: 0,
        away: 0,
        commentary : [
            {
                time: 0,
                comment: 'We are up!'
            }
        ],
    }
    this.eventTimes = []

  }

  _updateState = () => {
      this.state.countdown < 900 && !this.SimulationTeam.extraTime
      ? this.setState({countdown: this.state.countdown + 1})
      : this.state.countdown < 1200 && this.SimulationTeam.extraTime && this.state.home === this.state.away
      ? this.setState({countdown: this.state.countdown + 1})
      : ''
  }

    _formTime = (e) => {
        let count = this.state.countdown * 18
        let mins = Math.ceil(count / 180)
        let seconds = count % 60

        minutes = mins
        return mins + '\''
    }

  _setHalfTime = () => {
        this.setState({halfTime: !this.state.halfTime})
  }

  _setTime = () => {
      const Simula = this.SimulationTeam
      let cont = setInterval(() => {
        this._updateState()
        if(this.eventTimes.includes(this.state.countdown)) {
            // pick the active team!
            let teamChosen, color
            let teamChosenNumber = Math.random()

            // Engagement based on dominance
            let totalDominance = Simula.home.dominance + Simula.away.dominance
            let awayDominance = Simula.away.dominance / totalDominance // 0.6
            if (teamChosenNumber >= awayDominance && teamChosenNumber <= 1) {
                teamChosen = Simula.homePlayers
                color = Simula.homeColors
            }
            if (teamChosenNumber >= 0 && teamChosenNumber < awayDominance) {
                teamChosen = Simula.awayPlayers
                color = Simula.awayColors
            }
            this.SimulationTeam.home = {...Simula.home,  dominancePoint: 1 - awayDominance}
            this.SimulationTeam.away = {...Simula.away, dominancePoint: awayDominance}

            // pick the actor!
            let playerChosen = Math.floor(Math.random() * (teamChosen.length))
            let actor = teamChosen[playerChosen]
            // pick the action!
            let actionPicker = Math.floor(Math.random() * (Actions.length))
            let action = Actions[actionPicker]
            // pick the commentary
            // Check if goal and reflect accordingly!
            if (action === 'goal'){
                (teamChosenNumber >= awayDominance) 
                ? this.setState({home: this.state.home + 1})
                : this.setState({away: this.state.away + 1})
            }

            if (action === 'corner') {
                actor = teamChosen.filter((e) => e.cornerPicker)[0]
            }
            
            let commentary = __commentarySelectorEngine(action)
            commentary = buildCommentary(actor, commentary)
            this.state.commentary.unshift({
                time: minutes,
                comment: commentary,
                color: color,
                actor: actor,
                action: action,
                teamChosenNumber
            })
        }

        if(this.state.countdown === 450 || this.state.countdown === 900) {
            this._setHalfTime()
            clearInterval(cont)
        }

      },
      100)
  }

  _setEvents = () => {
        const timesOfAction = Math.ceil(Math.random() * (30 - 5)) + 5
        let i, stop = 1
        for(i = 0; i < timesOfAction; i++){
            stop = Math.floor(Math.random() * 900 )
            this.eventTimes.push(stop)
        }
        this.eventTimes.sort((a,b) => a - b)
  }

  componentDidMount = () => {
      this._setEvents()
      this._setTime()
  }

  _chooseLeftBoxColor = () => {
    if (this.state.countdown >= 0 && this.state.countdown < 90) {return 'rgb(40, 153, 102)'}
    if (this.state.countdown >= 90 && this.state.countdown < 190) {return 'rgb(60, 153, 102)'}
    if (this.state.countdown >= 190 && this.state.countdown < 290) {return 'rgb(80, 153, 102)'}
    if (this.state.countdown >= 290 && this.state.countdown < 390) {return 'rgb(100, 153, 102)'}
    if (this.state.countdown >= 390 && this.state.countdown < 490) {return 'rgb(140, 153, 102)'}
    if (this.state.countdown >= 490 && this.state.countdown < 590) {return 'rgb(180, 153, 102)'}
    if (this.state.countdown >= 590 && this.state.countdown < 690) {return 'rgb(200, 153, 102)'}
    if (this.state.countdown >= 690 && this.state.countdown < 790) {return 'rgb(230, 153, 102)'}
    if (this.state.countdown >= 790 && this.state.countdown < 890) {return 'rgb(250, 153, 102)'}

  }

  render() {
      const SimulationTeam = this.SimulationTeam
    return (
        <ScrollView style={{backgroundColor: '#fafafa'}}>
            <DisplayArea 
                countdown = {this.state.countdown}  
                hDP = {SimulationTeam.home.dominancePoint}
                commentary = {this.state.commentary}
                formedTime = {this._formTime(this.state.countdown)}
            />

            <View style={styles.timerInfo}>
                <Text style={styles.timeProvider}>TAG HEUER</Text>
                {this.state.halfTime ?
                    <TouchableOpacity onPress={() => {
                        this._setHalfTime()
                        this._setTime()
                    }}>
                        <View style={styles.button}>
                            <Text style = {styles.buttonText}>{ (this.state.countdown === 450 && this._setHalfTime) ? 'Start second half': 'Exit Arena'}</Text>
                        </View>
                    </TouchableOpacity> : <View><Text style={{color: '#666', fontSize: 12, paddingVertical:10, textAlign: 'center'}}>Game in Progress</Text></View>
                }
            </View>

            <View style={styles.teamStand}>
                <View style={styles.homeTeam}>
                    <View style={styles.customizeName}>
                        <Text style={styles.teamName, styles.rightAlign}>{this.SimulationTeam.home.name}</Text>
                    </View>
                    <ShadowedCirle size={40}><Text style={{fontWeight: 'bold', fontSize: 18, color: '#019837'}}>{this.state.home}</Text></ShadowedCirle>
                </View>
                <View style={styles.awayTeam}>
                    <ShadowedCirle size={40}><Text style={{fontWeight: 'bold', fontSize: 18, color: '#019837'}}>{this.state.away}</Text></ShadowedCirle>
                    <View style={styles.customizeName}>
                        <Text style={styles.teamName, styles.leftAlign}>{this.SimulationTeam.away.name}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.matchInfo}>
                <View style={styles.menuSorround}>
                    <Text style={styles.menu}>Highlights</Text>
                </View>
                <ScrollView style={{height: '80%'}} showsVerticalScrollIndicator = {false}>
                    {this.state.commentary.map((comm, i) =>  {
                        return <View key = {i} style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{flex: 1.5, justifyContent:'center', alignItems: 'center'}}>
                            <Text style = {{color: comm.color, fontWeight: 'bold'}}>
                                {comm.time}'
                            </Text>
                            <View><Text style={{fontWeight: 'bold', fontSize: 8, color: comm.color}}>{
                                comm.action === 'goal' ? 'GOAL'
                                :(comm.action === 'freekick') ? 'FREE KICK'
                                :(comm.action === 'throw in') ? 'THROW IN'
                                :(comm.action === 'corner') ? 'CORNER' 
                                : <></>
                            }</Text></View>
                        </View>
                        <View style={{flex: 7, paddingHorizontal: 10}}>
                            <Text style={{color: '#666', lineHeight: 23, fontSize: 15}}>{comm.comment}</Text>
                        </View>
                    </View>})}
                </ScrollView>
            </View>
            
        </ScrollView>
    )
  }
}

export default Simulation


const styles = StyleSheet.create({
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
        fontSize: 18,
        color: '#666'
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
        textAlign: 'right'
    },
    leftAlign: {
        textAlign: 'left'
    },
    customizeName: {
        flex: 1, justifyContent: 'center', padding: 10
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