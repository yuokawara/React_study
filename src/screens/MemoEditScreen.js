import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton.js'

class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.memoEditInput } 
                multiline placeholder="文字を入力" 
                autoCorrect={false}
                autoCapitalize="none" 
                />
                <CircleButton name="check" onPress={() => { this.props.navigation.goBack(); }} />
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


export default MemoEditScreen;