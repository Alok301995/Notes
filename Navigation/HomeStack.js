import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTab from './HomeTab'
import NewNote from '../Screens/NewNote'

const { Navigator, Screen } = createStackNavigator()

export default function HomeStack() {
  return (
    <Navigator>
        <Screen name="HomeTab" component={HomeTab} options={{headerShown:false}} />
        <Screen name="NewNote" component={NewNote} options={{title:"Back"}} />
    </Navigator>

  )
}
