import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import firebase from 'firebase';
import { Platform } from 'react-native';

import CircleButton from '../elements/CircleButton.js';

class MemoEditScreen extends React.Component {

    // 表示されたcomponentWillMountデータの保存
    state = {
        body: '',
        key:  '',
    }

    // Detail表示前の処理
    UNSAFE_componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ 
            body: params.memo.body, 
            key:  params.memo.key, 
        });
    }

    // currentuserからデータを抜き取って、データを参照
    handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const newDate = firebase.firestore.Timestamp.now();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
            // 参照しているドキュメントを更新
            .update({
                body: this.state.body,
                createOn: newDate,
            })
            .then(() => {
                const { navigation } = this.props;
                // 特殊処理、memodetailに変更表示を反映
                navigation.state.params.returnMemo({
                    body:     this.state.body,
                    key:      this.state.key,
                    createOn: newDate,
                });
                navigation.goBack();
            })
            .catch(() => {
            });
    }

    render() {
        return (
            <KeyboardAvoidingView style={ styles.container } behavior="height" keyboardVerticalOffset={100}>
                <TextInput style={ styles.memoEditInput } 
                multiline value={this.state.body} 
                autoCorrect={false}
                autoCapitalize="none" 
                returnKeyType = "done"
                // textを編集可能に処理
                onChangeText={(text) => {this.setState({ body: text }); }} 
                // Android用
                textAlignVertical="top" 
                />
                <CircleButton name="check" 
                onPress= {this.handlePress.bind(this)}
                />
            </KeyboardAvoidingView>

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
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        ...Platform.select({
            android: {
                fontSize: 12,
            },
            ios: {
                fontSize: 20,
            },
        }),
    },

});


export default MemoEditScreen;