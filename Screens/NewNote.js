import { StyleSheet, Text, View, TextInput,KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'



export default function NewNote({ navigation, options }) {


  return (
    <View style={[styles.container]}>
      <View style={[styles.inputContainer ]}>
        <TextInput 
        multiline 
        style={[styles.textInput , styles.textInputTitle]} 
        placeholder={"Title"}

        on
        ></TextInput>
      </View>
      <View style={[styles.inputContainer ]}>
        <TextInput multiline style={[styles.textInput, styles.textInputNote]} placeholder='Write Your Notes here...' ></TextInput>
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  textInputTitle: {
    fontSize: 40,
  },
  textInputNote: {
    fontSize: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: "2%",
    paddingVertical: "1%",
  }
})