import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from './src/components/MemoList.js';
import AppBar from './src/components/AppBar.js';
import CircleButton from './src/elements/CircleButton.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppBar />
          <MemoList />
          <CircleButton>+</CircleButton>
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
    paddingTop: 80,
  },
});
