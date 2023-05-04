import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyModal from './src/components/Modal';
import List from './src/components/List';

export default function App() {

  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleInputText = text => setTextItem(text)

  const saveItem = () => {
    setList(prevState => [...prevState, { name: textItem, id: Math.random().toString() }])
    setTextItem("")
  }

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleDeleteItem = (id) => {
    setList(prevState => prevState.filter(el => el.id !== id))
    setModalVisible(false)
  }

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.container_text}>Hagamos una lista</Text>
        <View>
          <TextInput placeholder="Agrega items" onChangeText={handleInputText} value={textItem} style={styles.input} />
          <Button title='AGREGAR +' color='black' onPress={() => saveItem()} />
        </View>
        <List list={list} handleModal={handleModal} />
        <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={itemSelected} handleDeleteItem={handleDeleteItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#dbe4f1'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container_text: {
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 20,
    paddingHorizontal: 100,
    paddingVertical: 10,
    borderColor: 'red',
    borderWidth: 1,
    paddingLeft: 10
  },

});
