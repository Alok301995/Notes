import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={[styles.buttonContainer ,{backgroundColor: (title === "Close") ? "red" : "green",}]}
            onPress={() => onPress(false)}
        >
            <Text style={[styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        // borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },

})