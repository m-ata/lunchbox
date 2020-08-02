import React, { useState } from 'react';

import { View,   
        Text, 
        TouchableOpacity, 
        StyleSheet, 
        ScrollView, 
        ImageBackground, 
        Image, 
        Dimensions,
        Animated
    } from 'react-native';

const MenuDetail = ({ route, navigation}) => {

    const { menu } = route.params;
    const choices = [
        {
            name: 'Extra Spicy',
            price: '2.00',
            currency: 'SAR',
            url: './../../../public/icons/radio.png'
        },
        {
            name: 'No Extra Oil',
            price: '2.00',
            currency: 'SAR',
            url: './../../../public/icons/radio.png'
        },
        {
            name: 'Extra Half Rice',
            price: '2.00',
            currency: 'SAR',
            url: './../../../public/icons/radio.png'
        },
    ]

    return(
        <View style={styles.container}>
            <View style={{height: 300}}>
                <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={menu.url}
                >
                    <View style={styles.imageView} 
                        onStartShouldSetResponder={() => navigation.navigate('Menus')}>
                        <Image 
                            source={require('./../../../public/icons/cross_icon.png')} 
                            style={styles.iconStyle}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={{minHeight: 100, marginLeft: 16, marginTop: 16}}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}> {menu.name} </Text>
                        <Text style={{fontSize: 16, marginTop: 4, marginLeft: -4 }} > - </Text>
                        <Text style={{fontSize: 16, marginTop: 4 }} >KCAL 800 </Text>
                    </View>
                    <Text style={{fontSize: 16, marginTop: 8}}> {menu.description} </Text>
                </ScrollView>
            </View>
            <View style={{height: 250}}>
                <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                minHeight: 50
                                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                    <Text style={{color: 'black', fontSize: 18}}> Your Choices </Text>
                    <Image 
                        source={require('./../../../public/icons/arrow_up.png')}
                        style={{marginLeft: 8}}
                    />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{
                                backgroundColor: 'rgb(23, 179, 158)',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 100,
                                height: 30,
                                marginRight: 16
                            }}
                        >
                            <Text style={{color: 'white',}}> REQUIRED </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    {
                        choices.map(c => {
                            return(
                                <>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', minHeight: 50}} >
                                        <View style={{ flexDirection: 'row', 
                                                        justifyContent: 'flex-start', 
                                                        alignItems: 'center', 
                                                        marginLeft: 16}} >
                                            <Image
                                                source={require('./../../../public/icons/radio.png')}
                                            />
                                            <Text style={{ fontSize: 17, 
                                                            fontWeight: 'bold', 
                                                            color: 'black',
                                                            marginLeft: 8
                                                        }}> {c.name} </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', 
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        marginRight: 16
                                                        }}>
                                            <Text>+ {c.price} {c.currency} </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: 'rgb(248, 248, 248)',
                                            borderBottomWidth: 2,
                                        }}
                                    />
                                </>
                            )
                        })
                    }
                    <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                minHeight: 50
                                }}>
                                    <Text style={{color: 'black', fontSize: 18, marginLeft: 16}}> How many ? </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', minHeight: 100}}>
                        <Image
                            source={require('./../../../public/icons/minus.png')}
                            style={{marginTop: 16}}
                        />
                        <Text style={{marginLeft: 16, marginTop: 24, fontSize: 20, fontWeight: 'bold'}}>0</Text>
                        <Image
                            source={require('./../../../public/icons/plus.png')}
                            style={{marginTop: 16, marginLeft: 16}}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                    style={{borderRadius: 10, 
                        backgroundColor: 'rgb(178, 178, 178)', 
                        marginLeft: 16,
                        marginRight: 16,
                        padding: 10,
                        width: Dimensions.get('window').width - 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={[styles.buttonText, { marginLeft: 16 }]}>ADD TO BASKET</Text>
                        
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                        <Text style={[styles.buttonText, { marginRight: 16 }]}> 45.00 SAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default MenuDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    iconStyle: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: Dimensions.get('window').width - 50
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})