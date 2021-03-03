import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class SmallPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
  }

  _setOpen = () => {
      this.setState({open: !this.state.open})
  }
  
  render() {
    const {title, playerList, backgroundColor} = this.props
    return (
        <>
        <TouchableWithoutFeedback onPress={this._setOpen}>

            <View style={styles.matchInfo}>
                <View style={[styles.menuSorround, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}]}>
                    <View>
                        <Text style={styles.menu}>{title}</Text>
                    </View>
                </View>
            </View>
        
        </TouchableWithoutFeedback>

        <View style={{display: this.state.open ? 'flex': 'none'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{padding: 10}}>
                <View style={{flexDirection: "row"}}>
                    {playerList.map((player, i) =>
                    <View key = {i} style={{padding: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <View key = {i} style={{
                            backgroundColor: backgroundColor,
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                            margin: 5,
                            padding: 2
                        }}>
                            <View style={{
                                backgroundColor: 'white',
                                flex: 1,
                                borderRadius: 100,
                                padding: 2
                            }}>
                                <View style = {{
                                    backgroundColor: backgroundColor,
                                    flex: 1,
                                    padding: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 100
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        // textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 18
                                    }}>{player.rating}</Text>
                                    <Text style={{
                                        fontSize: 8,
                                        color: 'white'
                                    }}>{player.shirtNumber}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingVertical: 8}}>
                            <Text style = {{
                                width: 80,
                                textAlign: 'center',
                                color: '#666',
                                fontWeight: 'bold'
                            }} numberOfLines = {1}>{player.name}</Text>
                        </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
        </>
    );
  }
}

export default SmallPlayer;

const styles = StyleSheet.create({
    matchInfo: {
        paddingHorizontal: 30,
    },
})