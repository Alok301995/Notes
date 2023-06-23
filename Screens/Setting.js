import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';

// The Setting screen is divided into 3 parts: User Info, App Setting, and Logout



export default function Setting() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.userInfoContainer]}>
            <View style={[styles.innerContainer]}>
                <View style={[styles.imageContainer]}>
                    <Image style={[styles.image]} source={{uri:"https://cdn-icons-png.flaticon.com/128/149/149071.png"}} />
                </View>
                <View style={[styles.infoContainer]}>
                    <Text style={[styles.userName]}>Alok Dhiman</Text>
                    <View style={[styles.emailContainer]} >
                        <Feather name="mail" size={18} color="gray" />
                        <Text style={[styles.email]}>alokdhiman018@gmail.com</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={[styles.editButtonContainer]}>
                <Feather name="edit" size={20} color="#0A6EBD" />
                <Text style={[styles.editTextButton]}>Edit Profile</Text>
            </TouchableOpacity>
      </View>
      <View style={[styles.appSettingContainer]}>

      </View>
      <View style={[styles.logoutContainer]}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    userInfoContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,

    },
    innerContainer: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },

    infoContainer: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    email: {
        fontSize: 16,
        marginLeft: 10,
        color: 'gray',
    },

    editButtonContainer: {
        flex:1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#0A6EBD',
        alignItems: 'center',
        borderRadius: 10,
        // padding: 10,
        justifyContent: 'center',
        margin: 10,
        width: "100%",
        alignSelf: 'center',

    },
    editTextButton: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#0A6EBD',
    },


    appSettingContainer: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'black',
    },
    logoutContainer: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'black',
    },






})