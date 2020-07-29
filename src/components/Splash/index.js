import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const SplashScreen = (props) => {
    let [animating, setAnimating] = useState(true);

    useEffect(() => {

        console.log(props.navigation);
        setTimeout(() => {
            props.navigation.navigate('Tab');
            props.navigation.dispatch(state => {
              // Remove the home route from the stack
              const routes = state.routes.filter(r => r.name !== 'Splash');
            
              return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
              });
            });
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
          <Image 
          style={styles.logoStyle}
          source={require('./../../../public/images/main_logo.png')}
          />
        </View>
      );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0a56c',
    },
    logoStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });