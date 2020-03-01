import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton.js'

class MemoEditScreen extends React.Component {

    // 表示されたcomponentWillMountデータの保存
    state = {
        memo: {},
    }

    // Detail表示前の処理
    componentWillMount() {
        console.log(this.props.navigation.state.params);
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }

    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.memoEditInput } 
                multiline value={this.state.memo.body} 
                //textを編集可能に処理
                onChangeText={(text) => {this.setState({ memo: { body: text } }); }} 
                />
                <CircleButton name="check" 
                onPress={() => { this.props.navigation.goBack(); }} 
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