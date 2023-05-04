import { StyleSheet, Text, View, Modal, Button, Pressable } from 'react-native'
import React from 'react'

const MyModal = ({ modalVisible, setModalVisible, item, handleDeleteItem }) => {
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true} >
      <View style={styles.modal_container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>Quieres borrar este elemento?</Text>
            <Text style={styles.text}>-{item.name}</Text>
          </View>
          <Pressable
            onPress={() => handleDeleteItem(item.id)}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#21b339' }}
            style={({ pressed }) => [{
              backgroundColor: pressed ? '#f6e5ea' : '#941010'
            }, styles.button]}
          >
            <Text style={{ color: "#fff", fontSize: 15, textAlign: 'center' }}>ACEPTAR</Text>
          </Pressable>
          <Pressable
            onPress={() => setModalVisible(false)}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#21b339' }}
            style={({ pressed }) => [{
              backgroundColor: pressed ? '#f6e5ea' : '#107498'
            }, styles.button]}
          >
            <Text style={{ color: "#fff", fontSize: 15, textAlign: 'center' }}>CANCELAR</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default MyModal

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    backgroundColor: '#f134349b',
    justifyContent: 'center',
    alignItems: 'center'
  }, content: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 20
  }, text: {
    fontSize: 20,
    marginBottom: 15
  }, button: {
    padding: 10,
    marginVertical: 5,
    height: 'auto',
    width: 'auto'
  }
})
