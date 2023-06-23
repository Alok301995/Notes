import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HorizontalLine from './HorizontalLine'

// The function should return a Login View 
// The function call API for user authentication using two methods.
// 1. Email and Password
// 2. Google Authentication
// It also link to two different screens 1. Create Account 2. Forgot Password


export default function Login({ navigation }) {
    return (
        <View style={[styles.container]}>
            {/* Heading text container */}
            <View style={[styles.headingContainer]}>
                <Text style={[styles.heading]}>Let's Login</Text>
                <Text style={[styles.heading, { fontSize: 20, color: "gray", marginTop: 5 }]}>And notes your idea</Text>
            </View>
            {/* Email Input Container */}
            <View style={[styles.inputContainer]}>
                <Text style={[styles.inputText]}>Email Address</Text>
                <TextInput placeholder="Example : johndoe@gmail.com" style={[styles.input]} />
            </View>
            <View style={[styles.inputContainer]}>
                <Text style={[styles.inputText]}>Password</Text>
                <TextInput placeholder="*********" secureTextEntry style={[styles.input]} />
            </View>
            {/* Password Input Container */}
            <View style={[styles.forgotPasswordContainer]}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('ForgetPass')}
                >
                    <Text style={[styles.forgotPasswordText]}>Forgot Password</Text>
                </TouchableOpacity>

            </View>
            {/* Button Container */}
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity style={[styles.buttonInnerContainer, { backgroundColor: "#0A6EBD"}]}
                >
                    <Text style={[styles.button, styles.loginButton]}>Login</Text>
                </TouchableOpacity>
                <HorizontalLine title="OR" />
                <TouchableOpacity style={[styles.buttonInnerContainer]}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/281/281764.png" }}
                        style={[styles.googleIcon]} />
                    <Text style={[styles.button, styles.googleButton]}>Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonInnerContainer, { borderWidth: 0 }]}
                onPress={()=>navigation.navigate('Register')}
                >
                    <Text style={[styles.button, styles.registerButton]}>Don't have any account? Register here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


// Styles for components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: "10%",

    },
    headingContainer: {
        marginTop: "10%",
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
    inputText: {
        marginBottom: "2%",
        marginLeft: "1%",
        color: "gray",
    },

    forgotPasswordContainer: {
        marginVertical: "5%",
        flexDirection: 'row',
        paddingVertical: "2%",
    },

    forgotPasswordText: {
        fontSize: 18,
        textDecorationLine: 'underline',
        marginLeft: "1%",
        color: "#0A6EBD",
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

    loginButton: {
        color: 'white',
    },

    registerButton: {
        color: "#0A6EBD",
    },

    googleButton: {

    },
    googleIcon: {
        width: 25,
        resizeMode: 'contain',
        marginRight: 10,
    },


})