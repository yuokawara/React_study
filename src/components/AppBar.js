import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {
        render() {
            return (
          <View style={styles.appbar}>
            <View>
              <Text style={styles.appbarTitle}>Testメモです</Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    // appbar
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#00FF00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },

  appbarTitle: {
    color: '#800000',
    fontSize: 20,
  },

});
export default AppBar;