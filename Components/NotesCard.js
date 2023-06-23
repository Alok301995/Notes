import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Card Header
// Card Body
// Card Footer

export default function NotesCard({title, content, date}) {
    return (
        <View style={[styles.container]}>
            <View style={[styles.cardhHeader]}>
                <Text style={[styles.title]}>{title}</Text>
            </View>
            <View style={[styles.cardBody]}>
                <Text style={[styles.cardBodyText]} numberOfLines={5}>{content}</Text>
            </View>
            <View style={[styles.cardFooter]}>  
                <Text style={[styles.footerText]}>{date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 15,
        margin: 10,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        padding: "5%",
    },
    cardhHeader: {
        height: "15%",
        flexDirection: "row",
    },
    title: { 
        fontWeight: "bold",
        fontSize: 20,
     },
    date: { 
        color: "grey", 
     },
    cardBody: {
        height: "70%",
        paddingVertical: "5%",
        // padding: "5%",
    },
    cardBodyText: {
        fontSize: 18,
        // color: "grey",
    },
    cardFooter: {
        // borderWidth: 1,
        // borderColor: "#blue",
        height: "15%",
        padding: "5%",
        justifyContent: "center",
        

    },
    footerText: {
        color: "grey",
        fontSize: 14,
        fontWeight: "bold",
    }
    


})