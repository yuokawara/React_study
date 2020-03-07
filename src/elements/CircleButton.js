// 汎用性有り

import React from 'react';
import { StyleSheet, View, TouchableHighlight, } from 'react-native';
import * as Font from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    };
    async UNSAFE_componentWillMount() {
        await Font.loadAsync({
            FontAwesome: fontAwesome,
        });

        this.setState({
            fontLoaded: true
        });
    }
        render() {
            const { name, style, color, onPress } = this.props;
            let bgColor = '#E31676';
            let textColor = '#fff';

            if (color === 'white') {
                bgColor = '#fff';
                textColor = '#E31676';
            }

            return (
                <TouchableHighlight style={[ styles.container, style ]} onPress={onPress} underlayColor="transparent">
                    <View style={[styles.circleAddButton, { backgroundColor: bgColor }]}>
                    {
                        this.state.fontLoaded ? (
                            <CustomIcon name={ name } style={[styles.circleAddButtonTitle, { color: textColor } ]} />
                        ) : null
                    }
                    </View>
                </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    // addbutton
    container: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 48, // バグ対応追加
        height: 48, // バグ対応追加

    },
    circleAddButton: {
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
        // android用設定
        elevation: 4,
    },
    // addbuttontitle
    circleAddButtonTitle: {
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 30,
        color: '#fff',
    },
});

export default CircleButton;