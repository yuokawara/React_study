// 汎用性有り

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
        render() {
            return (
          <View style={styles.circleAddButton}>
            <Text style={styles.circleAddButtonTitle}>
                { this.props.children}
            </Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    // addbutton
    circleAddButton: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        width: 40,
        height: 40,
        backgroundColor: '#FF00FF',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        zIndex: 10,
    },
    // addbuttontitle
    circleAddButtonTitle: {
        fontSize: 30,
        lineHeight: 30,
        color: '#fff',
    },
});

export default CircleButton;