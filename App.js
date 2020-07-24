/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/components/Home/index.js';
import SignUp from './src/components/Auth/SignUp.js';
import SignIn from './src/components/Auth/SignIn.js';
import SplashScreen from './src/components/Splash/index.js';

const App = createStackNavigator({
  Splash : {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: Home
  }
}
);

export default createAppContainer(App);
