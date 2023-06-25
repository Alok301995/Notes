import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'


export default function NoteForm() {

    return (
        <KeyboardAvoidingView style={[styles.container]}
            behavior='padding'
        >
            <View>
                <TextInput style={[styles.titleInput]}
                    placeholder='Title'
                    multiline={true}

                ></TextInput>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <TextInput style={[styles.bodyInput]}
                        placeholder='Write Your Note Here...'
                        multiline={true}
                        scrollToEnd={true}
                        cursorColor={"gray"}
                    ></TextInput>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: "5%",
        flex: 1,

    },
    titleInput: {
        fontSize: 30,
        fontWeight: "bold",
        padding: "2%",
    },
    bodyInput: {
        fontSize: 20,
        padding: "2%",
        marginVertical: "5%",
        color: "grey",
        borderWidth: 1,
        borderColor: "grey",
    },
})