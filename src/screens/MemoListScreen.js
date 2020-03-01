import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList.js';
import CircleButton from '../elements/CircleButton.js';
import firebase from 'firebase';


class MemoListScreen extends React.Component {
    state = {
        memoList: [],
    }
    componentWillMount() {
        const { currentUser } = firebase.auth();
        firebase.firestore().collection(`users/${currentUser.uid}/memos`)
        .get()
        .then((snapshot) => {
            const memoList = [];
            snapshot.forEach((doc) => {
                memoList.push({ ...doc.data(), key: doc.id });
            });
            this.setState({ memoList });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    handlePress() {
        this.props.navigation.navigate('MemoCreate');
    }
    render () {
        return (
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
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