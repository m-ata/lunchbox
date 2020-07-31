import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, Button, } from 'react-native';

const Menus = ({ navigation }) => {

  const menus = [{
    name: 'Chicken Karhai Half',
    description: 'Fries topped with melted cheese ...',
    price: '45.00',
    currency: 'SAR',
    url: require('./../../../public/images/menu1.png')
    }, {
        name: 'Special Biryani Full',
      description: 'Fries topped with melted cheese ...',
      price: '45.00',
      currency: 'SAR',
      url: require('./../../../public/images/menu2.png')
    }, {
      name: 'Chicken Boneless',
        description: 'Fries topped with melted cheese ...',
        price: '45.00',
        currency: 'SAR',
        url: require('./../../../public/images/menu3.png')
    }, {
      name: 'Daal Tadka Special',
        description: 'Fries topped with melted cheese ...',
        price: '45.00',
        currency: 'SAR',
        url: require('./../../../public/images/menu4.png')
    }]

    return (
      <>
        <ScrollView keyboardShouldPersistTaps="handled">
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
            {
              menus.map((menu, i) => {
                return (
              <View style={styles.menuStyle}>
                <View style={{marginLeft: 16}}>
                  <Text style={{fontSize: 20, color: 'black'}}> {menu.name} </Text>
                  <Text style={{fontSize: 15, color: 'black', marginTop: 4, marginLeft: 8}}>
                    { menu.description }
                    </Text>
                  <Text style={{fontWeight: 'bold', color: 'rgb(3, 160, 139)',  marginTop: 4, marginLeft: 8}}>
                    { menu.price }  SAR
                    </Text>
                </View>
                <View style={{width: 120, height: 100, marginLeft: 'auto', marginRight: 16 }}>
                  <ImageBackground
                    source={menu.url}
                    style={{width: '100%', height: '100%'}}
                    imageStyle={{ borderRadius: 20}}
                  >
                  </ImageBackground>
                </View>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
                )
              })
            }
          </ScrollView>
      </>
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
      },
      menuStyle: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100
      }
})