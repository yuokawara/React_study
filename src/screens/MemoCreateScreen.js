import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton.js'

import * as firebase from 'firebase/app';
import "firebase/firestore";

class MemoCreateScreen extends React.Component {
    state = {
        body: '',
    }

    handlePress() {
        const { params } = this.props.navigation.state;
        const db = firebase.firestore();

        db.collection(`users/${params.currentUser.uid}/memos`).add({
            body: this.state.body,
            createdOn: new Date(),
        })
        .then((docRef) => {
            console.log(docRef.id);
        })
        .catch((error) => {
            console.log('error');
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.memoEditInput } 
                multiline placeholder="文字を入力" 
                onChangeText={(text) =>  { this.setState({ body: text }); }}
                autoCorrect={false}
                autoCapitalize="none" 
                />
                <CircleButton name="check" onPress={this.handlePress.bind(this)} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    // container
    container: {
        flex: 1,
        width: '100%',
    },

    //editinput
    memoEditInput: {
        backgroundColor: '#efefef',
        flex: 1,
        fontSize: 20,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,

    },

});


export default MemoCreateScreen;