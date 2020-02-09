import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      {/* 上部バー */}
        <View style={styles.appber}>
          <View>
            <Text>Testメモです</Text>
          </View>
        </View>

      {/* メモBody */}
        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
