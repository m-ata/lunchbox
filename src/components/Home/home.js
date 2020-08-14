
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import { DOMAIN } from '../models/contants';

const Home = ({ navigation }) => {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
      axios.get(`${DOMAIN}api/brand/all`)
      .then(res => {
          if (res.status === 200) {
            setBrands(res.data.brands);
          }
      }).catch(err => {
        console.log('err ', err)
      })
  }, []);

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
            brands.length > 0 && brands.map((b, i) => {
              return (
                <TouchableOpacity key={`brand-${i}`}
                 onPress={() => {navigation.navigate('Menus', { Locations: b.Locations })}}>
                  <View style={styles.cardStyle} >
                    <ImageBackground
                      style={styles.backgroundImgStyle}
                      imageStyle={{ borderRadius: 15}}
                      source={require('./../../../public/images/res1.jpg')}
                    >
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                        style={styles.logoStyle}
                        source={require('./../../../public/images/logo1.png')}
                        />
                        <Text style={styles.title} >
                          { b.Name }
                        </Text>
                        <Text style={styles.description} >
                          { b.Address }
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