import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const { Navigator, Screen } = createBottomTabNavigator()
import Home from '../Screens/HomeScreen'
import CreateNote from '../Screens/CreateNote'
import FinishedNotes from '../Screens/FinishedNotes'
import SearchScreen from '../Screens/SearchScreen'
import Setting from '../Screens/Setting'
import { Ionicons } from '@expo/vector-icons';



export default function HomeTab() {
    return (
        <Navigator 
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#2e64e5',
            tabBarInactiveTintColor: '#000',
            tabBarStyle: {
                height: 60,
                backgroundColor: '#fff',
                borderTopWidth: 0,
                elevation: 0,
                borderTopColor: 'black',

            },
            tabBarShowLabel: false,

            
        }}
        >
            <Screen
                name="Home"
                component={Home}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }
                }

            />
            <Screen name="SearchScreen" component={SearchScreen} options={{

                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'search' : 'search-outline'}
                        size={size}
                        color={color}
                    />
                ),
            }} />
            <Screen name="Add" component={CreateNote} options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons

                        name={focused ? 'add-circle' : 'add-circle-outline'}
                        size={size}
                        color={color}

                    />
                ),

            }} />
            <Screen name="FinishedNotes" component={FinishedNotes} options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
                        size={size}
                        color={color}
                    />
                ),
            }} />
            <Screen name="Setting" component={Setting} options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? 'settings' : 'settings-outline'}
                        size={size}
                        color={color}
                    />
                ),
            }} />
        </Navigator>
    )
}

const styles = StyleSheet.create({})