import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Button } from 'react-native';

const Menus = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.cardStyle}>
            <ImageBackground
              style={styles.backgroundImgStyle}
              imageStyle={{ borderRadius: 20}}
              source={require('./../../../public/images/main_menu.png')}
            >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title} >
                  20 % OFF
                </Text>
                <Text style={styles.description} >
                  Lore ipsum dolor sit amet
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{flexDirection: "row" ,marginTop: 20, justifyContent: 'space-between' }}>
          <Button
            // onPress={onPressLearnMore}
            title="Special"
            // color="#841584"
            style={styles.buttonStyle}
            />
            <Button
            // onPress={onPressLearnMore}
            title="Chicken"
            // color="#841584"
            style={styles.buttonStyle}
            />
            <Button
            // onPress={onPressLearnMore}
            title="Mutton"
            // color="#841584"
            style={styles.buttonStyle}
            />
            <Button
            // onPress={onPressLearnMore}
            title="Today"
            // color="#841584"
            style={styles.buttonStyle}
            />
          </View>
        </View>
    )
};

export default Menus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    cardStyle: {
        borderColor: '#B0A8A6',
        borderWidth: 1,
        width: 400,
        height: 200,
        borderRadius: 20,
        marginTop: 20,
      },
      backgroundImgStyle:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 40,
      },
      description: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 15,
      },
      buttonStyle: {
          borderRadius: 10
      }
})