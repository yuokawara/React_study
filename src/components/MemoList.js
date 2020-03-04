import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';


// 日付表示
const dateString = (date) => {
    if (date == null) { return ''; }
    const dateObject = date.toDate();
    // ['2020-02-29T06:07:50.000Z'][0] T以降は表示しない
    return dateObject.toISOString().split('T')[0];
};

// DBからitemを呼び出し
class MemoList extends React.Component {
  renderMemo({ item }) {
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
            <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
          </View>
        </TouchableHighlight>
    );
  }
    render() {
      return (
        <View style={styles.memoList}>
          <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
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