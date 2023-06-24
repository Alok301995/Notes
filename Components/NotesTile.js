import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import React from 'react'

export default function NotesTile({imageSource , title , description , backgroundColor ,onPress}) {
  return (
    <TouchableOpacity style={[styles.container ,{backgroundColor:backgroundColor}]}
      onPress={onPress}
    >
      <View style={[styles.imageContainer]}>
        <Image style={[styles.image]} source={{ uri: imageSource }} />
      </View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.heading]}>{title}</Text>
        <Text style={[styles.subHeading]}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'white',
        flexDirection:'row',
        alignItems:'center',
        padding:"5%",
        borderRadius:10,
        marginVertical:"5%",
        boxShadow: '0px 0px 5px 5px rgba(0,0,0,0.05)',

    },
    imageContainer:{
        flex:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:50,
        height:50,
        resizeMode:'contain',
    },
    textContainer:{
        flex:3,

    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    subHeading:{
        color:'white',
    }
})