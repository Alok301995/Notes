import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'

export default function CreatePassword() {
    return (
        <View style={[styles.container]}>
            {/* Heading text container */}
            <View style={[styles.textContainer]}>
                <Text style={[styles.heading]}>Create a New Password</Text>
                <Text style={[styles.heading, { fontSize: 18, color: "gray", marginTop: 5 }]}>Your new password must be different from previous used password</Text>
            </View>
            {/* Email Input Container */}

            <View style={[styles.passContainer]}>
                <Text style={[styles.passText]}>New Password</Text>
                <TextInput placeholder="*********" secureTextEntry style={[styles.input]} />
            </View>
            <View style={[styles.passContainer]}>
                <Text style={[styles.passText]}>Retype New Password</Text>
                <TextInput placeholder="*********" secureTextEntry style={[styles.input]} />
            </View>

            {/* Button Container */}
            <View style={[styles.buttonContainer]}>
                <TouchableOpacity style={[styles.buttonInnerContainer, { backgroundColor: "#0A6EBD" }]}>
                    <Text style={[styles.button, styles.createPassButton]}>Create Password</Text>
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
    passContainer: {
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
    passText: {
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

    createPassButton: {
        color: 'white',
    },
})