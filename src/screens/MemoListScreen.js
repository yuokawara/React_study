import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList.js';
import AppBar from '../components/AppBar.js';
import CircleButton from '../elements/CircleButton.js';

class MemoListScreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <MemoList />
                <CircleButton>+</CircleButton>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
});

export default MemoListScreen;