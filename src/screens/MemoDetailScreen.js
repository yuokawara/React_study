import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailscreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View style={styles.memoHeaderContents}>
                            <Text style={styles.memoHeaderTltle}>Testのアイデア</Text>
                            <Text style={styles.memoHeaderDate}>2020.02.11</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContents}>
                    <Text style={styles.memoContentsComment}>Testのアイデアです。調整中です。</Text>
                </View>

                <CircleButton color="white" style={styles.editButton}>▲</CircleButton>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    // container
    container: {
        flex: 1,
        width: '100%',
    },

    // memoheader
    memoHeader: {
        height: 100,
        backgroundColor: '#8FBC8F',
        justifyContent: "center",
        padding: 10,
    },

    memoHeaderTltle: {
        marginBottom: 4,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    
    memoHeaderDate: {
        fontSize: 20,
        color: '#fff',
    },

    // memocontents
    memoContents: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: "#fff",
        flex: 1,
    },

    // editbutton
    editButton: {
        top: 80,
    },
});

export default MemoDetailscreen;