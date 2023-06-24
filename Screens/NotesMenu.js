import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotesTile from '../Components/NotesTile'
import { CommonActions } from '@react-navigation/native';


export default function NotesMenu({ navigation }) {
  return (
    <View style={[styles.container]}
    >
      <View style={[styles.heading]}>
        <Text style={[styles.headingText]}>What Do You Want to Note?</Text>
      </View>
      <View style={[styles.tiles]}>
        <NotesTile
          imageSource="https://cdn-icons-png.flaticon.com/128/427/427735.png"
          title="Intrested Ideas"
          description="Use free text area, feel free to write it all"
          backgroundColor={'#9384D1'}
          onPress={() => navigation.navigate('NewNote')}
        />

        <NotesTile
          imageSource="https://cdn-icons-png.flaticon.com/128/1170/1170576.png"
          title="Buying Something"
          description="Use Checklist, so you won't miss anything"
          backgroundColor={'#088395'}
          onPress={() => navigation.navigate('NewNote')}
        />

        <NotesTile
          imageSource="https://cdn-icons-png.flaticon.com/128/3900/3900164.png"
          title="Goals"
          description="Near/Future goals, notes and keep focus"
          backgroundColor={'#FF6D60'}
          onPress={() => navigation.navigate('NewNote')}
        />

        <NotesTile
          imageSource="https://cdn-icons-png.flaticon.com/128/4489/4489706.png"
          title="Guidance"
          description="Create guidance for routine activities"
          backgroundColor={'#6DA9E4'}
          onPress={() => navigation.navigate('NewNote')}
        />

        <NotesTile
          imageSource="https://cdn-icons-png.flaticon.com/128/3176/3176366.png"
          title="Routine Tasks"
          description="Checklist with sub-checklist"
          backgroundColor={'#F6BA6F'}
          onPress={() => navigation.navigate('NewNote')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
    padding: "5%",
    backgroundColor: 'white',
  },
  heading: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'blue',
    justifyContent: 'center',
    // alignItems:'center',/
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tiles: {
    flex: 7,
  }

})