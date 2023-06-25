import { StyleSheet, Text, View , Image, Button } from 'react-native'
import React from 'react'
import CustomButton from './Button'

export default function Modal({modalVisibility}) {
  return (
    <View style={[styles.container , styles.fill]}>
      <View style={[styles.modalImageContainer]}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/8022/8022662.png" }} style={styles.modalImage} />
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.heading]}>Note Restored</Text>
        <Text style={[styles.subHeading]}>
            Your Note has been restored, and displayed it to the original catagory "Pinned Note"
            </Text>

      </View>
      <View style={[styles.buttonContainer]}>
            <CustomButton title={"Close"} onPress={modalVisibility} />
            <CustomButton title={"Undo"} onPress={modalVisibility} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    fill:{       
    },
    container: {
        // borderWidth:1,
        // borderColor:"white",
        width: "60%",
        height: "40%",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white",
    },
    modalImageContainer:{
        // borderWidth: 1,
        // borderColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
    },
    modalImage:{
        width: 40,
        height: 40,
        resizeMode: "contain",
        // borderWidth: 1,
        // borderColor: "gray",
    },
    textContainer:{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        height: "60%",
        flexGrow: 1,
        paddingVertical: "10%",
    },
    heading:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subHeading:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "gray",
    },
    buttonContainer:{
        
        
        alignItems: "center",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "5%",
    },
    








})