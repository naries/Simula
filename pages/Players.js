import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ShadowedCirle from '../components/ShadowedCirle';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {Nunito, NunitoBold, OpenSans, NunitoSemiBold, playerList} = this.props
    return (
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={{marginBottom: 10}}
        contentContainerStyle={{paddingHorizontal: 20}}> 
          {playerList.map((player, i) => {
              return (
              <View key = {i} style={{
                  height: 220,
                  width: 150,
                  borderWidth: 1,
                  borderColor: '#f3f3f3',
                  borderRadius: 4,
                  marginLeft: 10,
                //   padding: 10,
              }}>
                  <View style={{
                      borderRadius:4,
                      height: 218,
                      width: 148,
                      borderWidth: 1,
                      borderColor: '#f5f5f5'
                  }}>
                    <View style={{
                      borderRadius:4,
                      height: 216,
                      width: 146,
                      borderWidth: 1,
                      borderColor: '#f7f7f7'
                  }}>
                    <View style={{
                      borderRadius:4,
                      height: 214,
                      width: 144,
                      borderWidth: 1,
                      borderColor: '#f9f9f9'
                    }}>
                    <View style={{
                      borderRadius:4,
                      height: 212,
                      width: 142,
                      borderWidth: 1,
                      borderColor: '#fbfbfb',
                      backgroundColor: '#fdfdfd'
                    }}>
                        <View style={{padding: 10}}>
                            <Text style={[OpenSans, {color: '#666'}]} numberOfLines={1}>{player.name}</Text>
                            <Text style={[OpenSans, {color: '#666', fontSize: 11}]} numberOfLines={1}>{player.position}</Text>
                        </View>

                        <ShadowedCirle size={80} marginRight={0}/>

                        <View style={{flexDirection: 'row', justifyContent:"center", marginVertical: 5}}>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={[Nunito, {color: 'red', textAlign: 'right'}]}>{player.morale} </Text>
                                <Text style={{color: '#888', fontSize: 10, textAlign: 'right'}}>Morale </Text>
                            </View>
                            <View style={{width: 1, backgroundColor: '#bbb', marginHorizontal: 5}}></View>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={[Nunito, {color: 'green'}]}> {player.rating}</Text>
                                <Text style={{color: '#888', fontSize: 10, textAlign: 'left'}}> Rating </Text>
                            </View>
                        </View>

                        <View style={{padding: 10}}>
                            <Text style={[Nunito, {textAlign: 'center', color: '#bbb', fontSize: 11}]} numberOfLines={1}>Tap to view profile</Text>
                        </View>
                    </View>
                  </View>
                  </View>
                  </View>
              </View>
          )})}
      </ScrollView>
    );
  }
}

export default Players;
