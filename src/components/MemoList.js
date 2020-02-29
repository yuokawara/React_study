import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
    render() {
      console.log(this.props.memoList);
      return (
        <View style={styles.memoList}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>
        </TouchableHighlight>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイデア</Text>
            <Text style={styles.memoDate}>2020.02.09</Text>
          </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
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

});

export default MemoList;