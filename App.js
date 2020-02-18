// StackNavigater導入
import React from 'react';
import MemoListScreen from './src/screens/MemoListScreen.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// StackNavigater
const AppNavigator = createStackNavigator({
  Home: {
    screen: MemoListScreen
    
  },
});

export default createAppContainer(AppNavigator);
