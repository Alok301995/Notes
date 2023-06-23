import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigator from './LoginNavigator'
import HomeTab from './HomeTab'


// This is the entry point of our app

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.container]}>
        <LoginNavigator />
        {/* <HomeTab  /> */}
      </SafeAreaView>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // borderWidth: 1,
    // borderColor: 'red',
  }
})