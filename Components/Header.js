import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header({ navigation }) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.imageContainer]}>
                <TouchableOpacity style={[styles.button]}
                    onPress={() => navigation.pop()}
                >
                    <Image style={[styles.image]} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2722/2722991.png" }} />
                    <Text style={{ fontSize: 16, fontWeight:"500" }}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    imageContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: "5%",
        borderBottomColor: 'gray',
    },
    button: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }

})