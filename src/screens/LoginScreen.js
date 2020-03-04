import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';

class LoginScreen extends React.Component {
    state = {
        email: '', // testemail test2@test.com
        password: '', // testpasword test1234
    }
    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {

            // 操作中Loginに戻らないための処理
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        })
        .catch(() => {
        });
    }

    handlePress() {
        this.props.navigation.navigate('Signup');
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

                <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
                    <Text style={styles.signupText}>メンバー登録</Text>
                </TouchableOpacity>
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
        fontSize: 20,
        alignSelf: "center",
        marginBottom: 20,
    },

    // input
    input: {
        backgroundColor: '#efefef',
        height: 40,
        padding: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#000',
        elevation: 3,
    },

    // signup
    signup: {
        marginTop: 20,
        alignSelf: "center",
        elevation: 4,
    },
    // signupText
    signupText: {
        fontSize: 15,
    },

    // button
    Button: {
        width: '60%',
        backgroundColor: '#E31676',
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center", // button内のコンテンツをセンターにする
        alignSelf: "center", // button本体をセンターにする
        elevation: 3,
    },
    ButtonTitle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
    },
});


export default LoginScreen;