// 共用のAppBarはこちらに残しておく

import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar.js'
import MemoListScreen from './src/screens/MemoListScreen.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppBar />
          <MemoListScreen />
      </View>
    );
  }
}

// Style //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});
