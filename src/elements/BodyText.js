// 基本の形・・覚えておく

import React from 'react';
import { StyleSheet, view, Text} from 'react-native';

class BodyText extends React.Component {
    render() {
        return (
            <view>
                <text style={styles.text}>React</text>
            </view>
        );
    }
}

const styles = StyleSheet.create ({
    text: {
        color: '#DDD',
        backgroundColor: '#000',
    },
});

export default BodyText;