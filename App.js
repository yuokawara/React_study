import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 上部バー */}
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>Testメモです</Text>
          </View>
        </View>

        {/* メモBody */}
        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>

        </View>
        {/* メモBody End */}

          {/* + button */}
          <View style={styles.memoAddButton}>
            <Text style={styles.memoAddButtonTitle}>+</Text>
          </View>


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

  // appbar
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#00FF00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },

  appbarTitle: {
    color: '#800000',
    fontSize: 20,
  },

  // memolist
  memoList: {
    // backgroundColor: '#CCFFFF',
    width: '100%',
    flex: 1,
  },

  // memolistitem
  memoListItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#CBFFD3',
  },

  // memotitle
  memoTitle: {
    fontSize: 20,
    marginBottom: 3,
  },

  // memodate
  memoDate: {
    fontSize: 12,
    color: '#008000',
  },

  // memoaddbutton
  memoAddButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    width: 40,
    height: 40,
    backgroundColor: '#FF00FF',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },

  // memoaddbuttontitle
  memoAddButtonTitle: {
    fontSize: 30,
    lineHeight: 30,
    color: '#fff',
  },
});
