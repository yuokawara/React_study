// ロ○ィア風メモにする
import React from 'react';

// 各種Screen import
import MemoListScreen from './src/screens/MemoListScreen.js'
import MemoDetailScreen from './src/screens/MemoDetailScreen.js'
import MemoEditScreen from './src/screens/MemoEditScreen.js'
import SignupScreen from './src/screens/SignupScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';

// StackNavigater import
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// StackNavigater
const AppNavigator = createStackNavigator({
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  Signup:     { screen: SignupScreen },
  Login:      { screen: LoginScreen },
}, {
  defaultNavigationOptions: {
      headerTitle: 'Test',
      headerStyle: {
        backgroundColor: '#FFA500',
      },
      headerTitleStyle: {
        color: '#696969',
      },
   },
});

export default createAppContainer(AppNavigator);
