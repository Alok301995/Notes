import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmptyScreen from './EmptyScreen'


export default function FinishedNotes() {
  return (
    <EmptyScreen 
    imageSource={require('../assets/img/home2.jpg')} 
    heading={"No Finished Notes"} 
    subHeading={"You can add finished notes here"} />
  )
}

const styles = StyleSheet.create({})