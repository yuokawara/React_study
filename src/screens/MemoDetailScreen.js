import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';


// 日付表示
const dateString = (date) => {
    if (date == null) { return ''; }
    const dateObject = date.toDate();
    return dateObject.toISOString().split('T')[0];
    // const str = date.toDate().toISOString();
    // // ['2020-02-29T06:07:50.000Z'][0] T以降は表示しない
    // return str.split('T')[0];
};

class MemoDetailscreen extends React.Component {
    state = {
        memo: {},
    }

    componenWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ memo: params.memo });
    }
    
    returnMemo(memo) {
        this.setState({ memo });
    }

    render () {
        const { memo } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View style={styles.memoHeaderContents}>
                            <Text style={styles.memoHeaderTltle}>{memo.body.substring(0, 10)}</Text>
                            <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContents}>
                    <Text style={styles.memoBody}>{memo.body}</Text>
                </View>

                <CircleButton name ="pencil" 
                color="white" 
                style={styles.editButton} 
                onPress={() => { this.props.navigation
                .navigate('MemoEdit', { memo, returnMemo: this.returnMemo.bind(this) }); 
                }} 
                />
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

    // memobody
    memoBody: {
        lineHeight: 25,
        fontSize: 20,
    },

    // editbutton
    editButton: {
        top: 80,
    },
});

export default MemoDetailscreen;