import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Userlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Userlist </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})