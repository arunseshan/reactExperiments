import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Userlist from '../try/components/Userlist';
import News from '../try/components/News';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <News />
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'row', padding: 10,
  }
});
