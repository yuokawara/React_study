import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';



class SignupScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>メンバー登録</Text>
                <TextInput style={styles.input} value="E-MAIL ADRESS" />
                <TextInput style={styles.input} value="PASWORD" />
                <TouchableHighlight style={styles.Button} onPress={() => {}} underlayColor="#C70F66">
                    <Text style={styles.ButtonTitle}>Sign Up</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 25,
        backgroundColor: '#fff',
    },

    // title
    title: {
        fontSize: 25,
        alignSelf: "center",
        marginBottom: 25,
    },

    // input
    input: {
        backgroundColor: '#efefef',
        height: 50,
        padding: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#000',
    },

    // button
    Button: {
        width: '60%',
        backgroundColor: '#E31676',
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center", // button内のコンテンツをセンターにする
        alignSelf: "center", // button本体をセンターにする
    },
    ButtonTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold",
    },
});


export default SignupScreen;