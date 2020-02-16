// 共用のAppBarはこちらに残しておく

import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar.js'
import MemoListScreen from './src/screens/MemoListScreen.js'
import MemoDetailScreen from './src/screens/MemoDetailScreen.js';
import MemoEditScreen from './src/screens/MemoEditScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppBar />
          <LoginScreen />
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
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
});
