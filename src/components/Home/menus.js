import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';

const Menus = ({ navigation }) => {

  const menus = [{
    name: 'Chicken Karhai Half',
    description: 'Fries topped with melted cheese ...',
    price: '45.00',
    currency: 'SAR',
    url: require('./../../../public/images/menu1.png')
    }, {
        name: 'Special Biryani Full',
      description: 'Fries topped with melted cheese ... Testing',
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
        <ScrollView keyboardShouldPersistTaps="handled" style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
            <View style={styles.cardStyle}>
            <ImageBackground
              style={styles.backgroundImgStyle}
              imageStyle={{ borderRadius: 15}}
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
          <View style={{flexDirection: "row" ,marginTop: 20, justifyContent: 'flex-start' }}>
            <TouchableOpacity
              style={styles.selectedButtonStyle}
              // onPress={onPress}
            >
              <Text style={styles.selectedText}>Special</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.unselectedButtonStyle}
              // onPress={onPress}
            >
              <Text style={styles.unselectedText}>Chicken</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.unselectedButtonStyle}
              // onPress={onPress}
            >
              <Text style={styles.unselectedText}>Mutton</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.unselectedButtonStyle}
              // onPress={onPress}
            >
              <Text style={styles.unselectedText}>Today's Special</Text>
            </TouchableOpacity>
          </View>
            {
              menus.map((menu, i) => {
                return (
                  <>
                  <TouchableOpacity onPress={() => navigation.navigate('MenuDetail', {
                    menu: menu
                  })}>
                      <View style={styles.menuStyle}  
                      >
                        <View style={{marginLeft: 16}}>
                          <Text style={{fontSize: 16, color: 'black', lineHeight: 18, fontWeight: '700'}}> {menu.name} </Text>
                          <Text style={{fontSize: 14, lineHeight: 16, color: 'black', marginTop: 4, marginLeft: 8}}>
                            { menu.description }
                            </Text>
                          <Text style={{fontWeight: 'bold', color: 'rgb(3, 160, 139)',  marginTop: 4, 
                                        marginLeft: 8, fontSize: 13, lineHeight: 15}}>
                            { menu.price }  SAR
                            </Text>
                        </View>
                        <View style={{width: 85, height: 70, marginLeft: 'auto', marginRight: 16 }}>
                          <ImageBackground
                            source={menu.url}
                            style={{width: '100%', height: '100%'}}
                            imageStyle={{ borderRadius: 15}}
                          >
                          </ImageBackground>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.5,
                      marginTop: 16
                    }}
                  />
                  </>
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
        width: Dimensions.get('window').width - 30,
        height: 140,
        borderRadius: 15,
        marginTop: 20,
      },
      backgroundImgStyle:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 33,
        lineHeight: 40
      },
      description: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 11,
        lineHeight: 14
      },
      selectedButtonStyle: {
          borderRadius: 10.5,
          backgroundColor: 'rgb(255, 137, 85)',
          marginLeft: 16,
          // width: 102,
          alignItems: 'center',
          padding: 10,
          height: 34
      },
      unselectedButtonStyle: {
        borderRadius: 10.5,
        backgroundColor: 'rgb(242, 242, 242)',
        marginLeft: 16,
        alignItems: 'center',
        padding: 10,
        height: 34,
    },
    selectedText: {
        color: '#ffffff',
        fontSize: 14,
        lineHeight: 16
    },
    unselectedText: {
      color: '#000000',
      fontSize: 14,
      lineHeight: 16
  },
      menuStyle: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }
})