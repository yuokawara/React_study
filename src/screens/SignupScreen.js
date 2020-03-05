import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';

class SignupScreen extends React.Component {
    state = {
        email: '',
        password:'',
    }
    handleSubmit() {
        // Signup
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
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

    render() {
        return (
            <View scrollEnabled={false} style={styles.container}>
            <Text style={styles.title}>メンバー登録画面</Text>
                <TextInput style={styles.input} value={ this.state.email } 
                onChangeText={(text) => { this.setState({ email: text })}} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email Address"
                returnKeyType = "done"
                />
                <TextInput style={styles.input} value={ this.state.pasword } 
                onChangeText={(text) => { this.setState({ password: text })}} 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                returnKeyType = "done"
                secureTextEntry
                />
                <TouchableHighlight style={styles.Button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
                    <Text style={styles.ButtonTitle}>メンバー登録</Text>
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