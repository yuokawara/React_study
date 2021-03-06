// ロ○ィア風メモにする
import React from 'react';

// firebase読み込み
import firebase from 'firebase';

// プラットフォームごとの設定はこちらをimport
import { Platform } from 'react-native';

// StackNavigater import
import { createAppContainer }   from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 各種Screen import
import SignupScreen     from './src/screens/SignupScreen.js';
import LoginScreen      from './src/screens/LoginScreen.js';
import MemoListScreen   from './src/screens/MemoListScreen.js'
import MemoDetailScreen from './src/screens/MemoDetailScreen.js'
import MemoEditScreen   from './src/screens/MemoEditScreen.js'
import MemoCreateScreen from './src/screens/MemoCreateScreen.js'

// envfile
import ENV from './env.json';


 const firebaseConfig = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBASE_DB_URL,
  projectId:         ENV.FIREBASE_PRJ_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId:             ENV.FIREBASE_APP_ID,
  measurementId:     ENV.FIREBASE_MEASURE_ID,
};

firebase.default.initializeApp(firebaseConfig);

// StackNavigater
const AppNavigator = createStackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
  
}, {
  defaultNavigationOptions: {
      headerTitle: 'めもぱっど',
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#FFA500',
        ...Platform.select({
          android: {
            height: 70,
          },
          // ios
          shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.3,
            shadowRadius: 3,
        }),
      },
      headerTitleStyle: {
        color: '#696969',
      },
      headerTintColor: '#696969',
   },
});

export default createAppContainer(AppNavigator);
