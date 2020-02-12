// 汎用性有り

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
        render() {
            const { style, color } = this.props;
            let bgColor = '#E31676';
            let textColor = '#fff';

            if (color === 'white') {
                bgColor = '#fff';
                textColor = '#E31676';
            }

            return (
          <View style={[styles.circleAddButton, style, { backgroundColor: bgColor }]}>
            <Text style={[styles.circleAddButtonTitle, { color: textColor } ]}>
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
    },
    // addbuttontitle
    circleAddButtonTitle: {
        fontSize: 30,
        lineHeight: 30,
        color: '#fff',
    },
});

export default CircleButton;