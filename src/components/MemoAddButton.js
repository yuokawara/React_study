import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoAddButton extends React.Component {
        render() {
            return (
          <View style={styles.memoAddButton}>
            <Text style={styles.memoAddButtonTitle}>+</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
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

export default MemoAddButton;