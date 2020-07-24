import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text } from 'react-native';

const SplashScreen = (props) => {
    let [animating, setAnimating] = useState(true);

    useEffect(() => {

        console.log(props.navigation);
        setTimeout(() => {
            props.navigation.navigate('Home')
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
          <Text style={styles.content} >LUNCH BOX</Text>
        </View>
      );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D85E44',
    },
    content: {
        fontSize: 40,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
  });