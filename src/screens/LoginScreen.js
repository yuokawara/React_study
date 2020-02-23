import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

import firebase from 'firebase';

class LoginScreen extends React.Component {
    state = {
        email: '',
        password:'',
    }
    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            this.props.navigation.navigate('Home');
        })
        .catch((error) => {
            console.log('error', error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>ログイン</Text>
                <TextInput style={styles.input} value={ this.state.email } 
                onChangeText={(text) => { this.setState({ email: text })}} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email Address"
                />
                <TextInput style={styles.input} value={ this.state.password } 
                onChangeText={(text) => { this.setState({ password: text })}} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                secureTextEntry
                />
                <TouchableHighlight style={styles.Button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
                    <Text style={styles.ButtonTitle}>ログイン</Text>
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


export default LoginScreen;