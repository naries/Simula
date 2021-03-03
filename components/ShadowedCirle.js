import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ShadowedCirle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {size, finalColor, marginRight} = this.props;
    return (
        <View style={{marginRight: marginRight ? marginRight : 0 , justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: size, width: size, borderRadius: 100, borderWidth: 1, borderColor: '#f9f9f9'}}>
                <View style={{height: size-2, width: size-2, borderRadius: 100, borderWidth: 1, borderColor: '#f7f7f7'}}>
                    <View style={{height: size-4, width: size-4, borderRadius: 100, borderWidth: 1, borderColor: '#f5f5f5'}}>
                        <View style={{height: size-6, width: size-6, borderRadius: 100, borderWidth: 1, borderColor: '#f3f3f3'}}>
                            <View style={{height: size-8, width: size-8, borderRadius: 100, borderWidth: 1, borderColor: '#f1f1f1'}}>
                                <View style={{
                                    height: size-10, 
                                    width: size-10, 
                                    borderRadius: 100, 
                                    backgroundColor: finalColor ? finalColor :'#fff',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {this.props.children}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}

export default ShadowedCirle;
