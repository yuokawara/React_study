// 汎用性有り

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentWillMount() {
        await Font.loadAsync({
            FontAwesome: fontAwesome,
        });

        this.setState({
            fontLoaded: true
        });
    }
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
            {
                this.state.fontLoaded ? (
                    <Text style={[styles.circleAddButtonTitle, { color: textColor } ]}>
                        { this.props.children}
                    </Text>
                ) : null
            }
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
        fontFamily: 'FontAwesome',
        fontSize: 30,
        lineHeight: 30,
        color: '#fff',
    },
});

export default CircleButton;