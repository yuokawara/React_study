import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList.js';
import CircleButton from '../elements/CircleButton.js';

class MemoListScreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <MemoList navigation={this.props.navigation} />
                <CircleButton name="plus" onPress={() => { this.props.navigation.navigate('MemoEdit'); }} />
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