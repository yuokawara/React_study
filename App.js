// ロ○ィア風メモにする

// StackNavigater import
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';

// 各種Screen import
import LoginScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen.js';
import MemoListScreen from './src/screens/MemoListScreen.js'
import MemoDetailScreen from './src/screens/MemoDetailScreen.js'
import MemoEditScreen from './src/screens/MemoEditScreen.js'

import firebase from 'firebase';


 firebaseConfig = {
  apiKey: 'AIzaSyCKQCeS0OgAwg0OtU70hL3G5p1Brhm6PUg',
  authDomain: 'memoapp-20200222.firebaseapp.com',
  databaseURL: 'https://memoapp-20200222.firebaseio.com',
  projectId: 'memoapp-20200222',
  storageBucket: 'memoapp-20200222.appspot.com',
  messagingSenderId: '728436409725',
  appId: '1:728436409725:web:8398540d97a49043dcf814',
  measurementId: 'G-DJ5Q4C9SHJ',
};

firebaseConfig.initializeApp(firebaseConfig);
firebase.analytics();

// StackNavigater
const AppNavigator = createStackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  
}, {
  defaultNavigationOptions: {
      headerTitle: 'Test',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#FFA500',
      },
      headerTitleStyle: {
        color: '#696969',
      },
      headerTintColor: '#696969',
   },
});

export default createAppContainer(AppNavigator);
