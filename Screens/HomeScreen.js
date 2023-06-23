import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import NotesCard from '../Components/NotesCard'
import EmptyScreen from './EmptyScreen'

// Home Screen contain two function 1. for displaying empty screen 2. for displaying notes


export default function Home() {
  return (
    <EmptyScreen 
    imageSource={require("../assets/img/home1.jpg")} 
    heading={"Start Your Journey"} 
    subHeading={"Every big step start with small step!"} />
  )
}

const Notes = () => {
  return (
    <View></View>
  )
}

const styles = StyleSheet.create({



})