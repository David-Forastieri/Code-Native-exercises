import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'

const List = ({ list, handleModal }) => {

  // renderItem es una funcion para indicarle al flatlist como queremos renderizar la data
  const renderItem = ({ item }) => {
    return (
      <View style={styles.list_item}>
        <Text style={styles.list_text}>{item.name}</Text>
        <Button title='X' color={"red"} onPress={() => handleModal(item)} />
      </View>
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  list: {
    width: '90%',
    marginVertical: 20
  },
  list_item: {
    height: 60,
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3
  },
  list_text: {
    fontSize: 20,
    fontStyle: "italic"
  }
})