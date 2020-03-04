import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton.js';

class MemoEditScreen extends React.Component {

    // 表示されたcomponentWillMountデータの保存
    state = {
        body: '',
        key:  '',
    }

    // Detail表示前の処理
    componentWillMount() {
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
            <View style={ styles.container }>
                <TextInput style={ styles.memoEditInput } 
                multiline value={this.state.body} 
                autoCorrect={false}
                autoCapitalize="none"
                //textを編集可能に処理
                onChangeText={(text) => {this.setState({ body: text }); }} 
                />
                <CircleButton name="check" 
                onPress= {this.handlePress.bind(this)} 
                />
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
        fontSize: 20,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },

});


export default MemoEditScreen;