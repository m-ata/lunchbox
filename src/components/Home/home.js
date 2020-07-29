
import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native'

const Home = ({ navigation }) => {

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.cardStyle}
            onStartShouldSetResponder={() => {navigation.navigate('Menus')}}
            >
            <ImageBackground
              style={styles.backgroundImgStyle}
              imageStyle={{ borderRadius: 20}}
              source={require('./../../../public/images/res1.jpg')}
            >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                style={styles.logoStyle}
                source={require('./../../../public/images/logo1.png')}
                />
                <Text style={styles.title} >
                  The Lunch Box
                </Text>
                <Text style={styles.description} >
                  Indian & Arabic Cuisine
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.cardStyle}>
            <ImageBackground
              style={styles.backgroundImgStyle}
              imageStyle={{ borderRadius: 20}}
              source={require('./../../../public/images/res2.jpg')}
            >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Image 
                style={styles.logoStyle}
                source={require('./../../../public/images/logo2.png')}
                />
                <Text style={styles.title} >
                  Unique Barbeque
                </Text>
                <Text style={styles.description} >
                    BBQ, Turkish & Indian Food
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.cardStyle}>
            <ImageBackground
            imageStyle={{ borderRadius: 20}}
              style={styles.backgroundImgStyle}
              source={require('./../../../public/images/res3.jpg')}
            >
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Image 
                style={styles.logoStyle}
                source={require('./../../../public/images/logo3.png')}
                />
                <Text style={styles.title} >
                  Lunch Box Express
                </Text>
                <Text style={styles.description} >
                  Chaat, Shawarma & Juice
                </Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardStyle: {
    borderColor: '#B0A8A6',
    borderWidth: 1,
    width: 400,
    height: 250,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  backgroundImgStyle:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100
  },
  title: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10
  },
  description: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 15,
  }
});