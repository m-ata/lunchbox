/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Picker } from 'react-native';

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
    screen: SignUp,
    navigationOptions: {
      title: 'Register Now',
      headerTitleStyle: {
        alignSelf: 'center'
      }
    }
  },
  Home: {
    screen: Home,
    navigationOptions: () => {
      
      return {
        headerTitle: () =>  <Picker
        // selectedValue={selectedValue}
        style={{ height: 50, 
                  width: 250,
                  alignSelf: 'center', 
                  color: 'white' 
                }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Al Murabba, Riyadh" value="murabba" />
        <Picker.Item label="Al Murabba, Makkah" value="makkah" />
      </Picker>,
      headerStyle: {
        backgroundColor: '#f0a56c'
      },
      headerTintColor: '#ffffff',
      }
    }
  }
}
);

export default createAppContainer(App);
