import { StyleSheet, Text, View , Image , TouchableOpacity,StatusBar, TextInput } from 'react-native'
import React from 'react'

export default function ForgetPass() {
  return (
    <View style={[styles.container]}>
            {/* Heading text container */}
            <View style={[styles.textContainer]}>
                <Text style={[styles.heading]}>Forget Password</Text>
                <Text style={[styles.heading, { fontSize: 18, color: "gray", marginTop: 5 }]}>Insert your email to receive a code for creating
                    new password
                </Text>
            </View>
            {/* Email Input Container */}
        
            <View style={[styles.emailContainer]}>
                <Text style={[styles.emailText]}>Email Address</Text>
                <TextInput placeholder="Example : johndoe@gmail.com" style={[styles.input]} />
            </View>
            
            {/* Button Container */}
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity style={[styles.buttonInnerContainer, { backgroundColor: "#0A6EBD"}]}>
                    <Text style={[styles.button, styles.sendCodeButton]}>Send Code</Text>
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
    textContainer: {
        marginBottom: "5%",
    },
    heading: {
        fontSize: 30,
    },
    emailContainer: {
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
    emailText: {
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

    sendCodeButton: {
        color: 'white',
    },
})