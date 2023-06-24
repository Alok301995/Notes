import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NotesMenu from '../Screens/NotesMenu'
import NewNote from '../Screens/NewNote'


const { Navigator, Screen } = createStackNavigator()



export default function CreateNoteStack() {
  return (
    <Navigator  initialRouteName='NotesMenu'>
        <Screen name="NotesMenu" component={NotesMenu} options={{headerShown:false}} />
        <Screen name="NewNote" component={NewNote} />
    </Navigator>
  )
}

const styles = StyleSheet.create({})