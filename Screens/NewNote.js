import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ModalComponent from '../Components/Modal'
import NoteForm from '../Components/NoteForm'


export default function NewNote({ navigation, options }) {

  const [modalVisible, setModalVisible] = useState(false)


  return (
    <View style={[styles.container, styles.fill]}>

      <View style={[styles.noteFormContainer]}>
        <NoteForm />
      </View>
      <TouchableOpacity style={[styles.buttonContainer]}
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1828/1828817.png" }} style={styles.buttonImage} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.modelContainer]}>
          <ModalComponent modalVisibility ={setModalVisible} />
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({

  fill: {
    flex: 1,
  },
  container: {
    // borderWidth: 1,
    // borderColor: "red",
  },
  noteFormContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "white",
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    transform: [{ translateX: -40 }, { translateY: -40 }],
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  modelContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
  },



})