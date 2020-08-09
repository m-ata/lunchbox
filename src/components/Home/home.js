
import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'

const Home = ({ navigation }) => {

  const restaurants = [
    {
      image: require('./../../../public/images/res1.jpg'),
      logo: require('./../../../public/images/logo1.png'),
      title: 'The Lunch Box',
      description: 'Indian & Arabic Cuisine'
    },
    {
      image: require('./../../../public/images/res2.jpg'),
      logo: require('./../../../public/images/logo2.png'),
      title: 'Unique Barbeque',
      description: 'BBQ, Turkish & Indian Food'
    },
    {
      image: require('./../../../public/images/res3.jpg'),
      logo: require('./../../../public/images/logo3.png'),
      title: 'Lunch Box Express',
      description: 'Chaat, Shawarma & Juice'
    }
  ]

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          {
            restaurants.map(r => {
              return (
                <TouchableOpacity onPress={() => {navigation.navigate('Menus')}}>
                  <View style={styles.cardStyle} >
                    <ImageBackground
                      style={styles.backgroundImgStyle}
                      imageStyle={{ borderRadius: 15}}
                      source={r.image}
                    >
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                        style={styles.logoStyle}
                        source={r.logo}
                        />
                        <Text style={styles.title} >
                          { r.title }
                        </Text>
                        <Text style={styles.description} >
                          { r.description }
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              )
            })
          }
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
    width: Dimensions.get('window').width - 30,
    height: 185,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    // marginBottom: 10
  },
  backgroundImgStyle:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    lineHeight: 28,
    fontWeight: 'bold'
  },
  description: {
    color: 'white',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400'
  }
});