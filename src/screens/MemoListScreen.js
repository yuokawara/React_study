import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as firebase from 'firebase/app';
import "firebase/firestore";

import MemoList from '../components/MemoList.js';
import CircleButton from '../elements/CircleButton.js';

// 後で使う
// this.props.navigation.navigate('MemoEdit');

class MemoListScreen extends React.Component {
    handlePress() {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true  });
        db.collection('memos').add({
            body: 'testmemo',
            createdOn: '2020.02.20',
        })
        .then((docRef) => {
            console.log(docRef.id);
        })
        .catch((error) => {
            console.log('error');
        });
    }
    render () {
        return (
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F0F8FF',
    },
});

export default MemoListScreen;