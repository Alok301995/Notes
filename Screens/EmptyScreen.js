import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

export default function EmptyScreen({imageSource, heading, subHeading}) {

  return (
    <View style={[styles.container]}>
      <View style={[styles.imageContainer]}>
        <Image style={[styles.image]} source={imageSource} />
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.heading]}>{heading}</Text>
        <Text style={[styles.subHeading]}>{subHeading}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      imageContainer: {
        flex: 3,
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
      },
      textContainer: {
        flex: 1,
      },
      heading: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
      },
      subHeading: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
        color: "gray",
      },
})