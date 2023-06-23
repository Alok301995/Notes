import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HorizontalLine({title, marginVertical}) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
            <View>
                <Text style={{ width: 50, textAlign: 'center', }}>{title}</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        </View>
    )
}