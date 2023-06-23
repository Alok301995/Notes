import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'

 // The splash screen contain a carousel of images demonstrating the app features.
// It also contain loading animation and app logo.
// The carousel is automatically scrollable.

export default function SplashScreen({ navigation }) {

  const isLogin = false

  useEffect(() => {
    setTimeout(() => {
      if (isLogin) {
        navigation.replace('HomeNav')
        return
      }
      navigation.replace('Login')
    }, 2000)
  }, [])

  return (
    <View style={[styles.container]}>
      {/* Carousel Container */}
      <View style={[styles.carouselContainer]}>
        <View style={[styles.imageContainer]}>
          <Image source={require(`../assets/img/splash3.jpg`)} style={[styles.imageContainer]} />
        </View>
      </View>
      {/* Text Container */}
      <View style={[styles.textContainer]}>
        <Text style={[styles.text]}>Jot Down Anything you want to acheive, today or in the future</Text>
      </View>
      {/* Loader container */}
      <View style={[styles.loaderContainer]}>
        <ActivityIndicator size="large" color="#2D4356" style={[styles.loader]} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({


  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'blue',
    padding: 10,
    backgroundColor: 'white',
  },
  carouselContainer: {
    flex: 8,
  },
  imageContainer: {
    width: '100%',
    resizeMode: 'contain',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'green',
    alignContent: 'center',

  },
  textContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    // fontWeight: 'bold',

  },
  loaderContainer: {
    flex: 2,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  loader: {
    marginTop: 20,
   },



})