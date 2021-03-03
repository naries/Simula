import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Profile from './pages/Profile'
import {NavigationContainer} from '@react-navigation/native'
// Import the navigator
import {createStackNavigator} from '@react-navigation/stack'

import { AppLoading } from 'expo'
import Simulation from './pages/Simulation'
import Buildup from './pages/Buildup'

const stack = createStackNavigator()

export default function App() {
  const [loading, setLoading] = useState(true)

  const _setLoading = (which) => {
    setLoading(which)
  }

  // Loading function
  async function _loadFontsAsync() {
    _setLoading(false)
  }

  if( loading ) {
    _loadFontsAsync()
    return <AppLoading />
  }

  return (
      <>
      {/* add navigator screens */}
        <NavigationContainer>
          <stack.Navigator initialRouteName ="Simula">
            <stack.Screen name="Simulation" component = {Simulation} />
            <stack.Screen name="Simula" component = {Profile} />
            <stack.Screen name="Buildup" component = {Buildup} />
          </stack.Navigator>
        </NavigationContainer>
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
})