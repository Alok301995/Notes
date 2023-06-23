import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HorizontalLine from './HorizontalLine'

export default function Register({ navigation}) {
  return (
    <View style={[styles.container]}>
            {/* Heading text container */}
            <View style={[styles.headingContainer]}>
                <Text style={[styles.heading]}>Register</Text>
                <Text style={[styles.heading, { fontSize: 20, color: "gray", marginTop: 5 }]}>And start taking notes</Text>
            </View>
            {/* Email Input Container */}
            <View style={[styles.inputContainer]}>
                <Text style={[styles.regText]}>Full Name</Text>
                <TextInput placeholder="Example : John Doe" style={[styles.input]} />
            </View>
            <View style={[styles.inputContainer]}>
                <Text style={[styles.regText]}>Email Address</Text>
                <TextInput placeholder="Example : johndoe@gmail.com" style={[styles.input]} />
            </View>
            <View style={[styles.inputContainer]}>
                <Text style={[styles.regText]}>Password</Text>
                <TextInput placeholder="*********" secureTextEntry style={[styles.input]} />
            </View>
            <View style={[styles.inputContainer]}>
                <Text style={[styles.regText]}>Retype Password</Text>
                <TextInput placeholder="*********" style={[styles.input]} />
            </View>
            {/* Button Container */}
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity style={[styles.buttonInnerContainer, { backgroundColor: "#0A6EBD"}]}>
                    <Text style={[styles.button, styles.regButton]}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: "10%",

    },
    headingContainer: {
        marginBottom: "5%",
    },
    heading: {
        fontSize: 30,
    },
    inputContainer: {
        marginVertical: "5%",
    },
    input: {
        paddingLeft: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10,
    },
    regText: {
        marginBottom: "2%",
        marginLeft: "1%",
        color: "gray",
    },

    buttonContainer: {
        marginVertical: "5%",
    },

    buttonInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#5A96E3",
        padding: 10,
        marginVertical: "2%",
        borderRadius: 20,
    },

    button: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 10,
    },

    regButton: {
        color: 'white',
    },


})