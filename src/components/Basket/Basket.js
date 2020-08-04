import React, { useState } from 'react';

import { View,   
    Text, 
    TouchableOpacity, 
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const Basket = () => {

    const basket = [
        {
            name: 'Special Biryani',
            description: 'Extra Spicy, Half rice',
            price: '45.00',
            discount: '20.00',
            currency: 'SAR',
            qty: '1x'
        },
        {
            name: 'Chicken Karahi Half',
            description: 'Extra Spicy, Half rice',
            price: '45.00',
            discount: '0.00',
            currency: 'SAR',
            qty: '2x'
        },
    ]

    return (
        <View>
            <ScrollView>
                <ScrollView>
                    <View style={{height: 200}}>
                        {
                            basket.map((b, i) => {
                                return (
                                    <>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{margin: 16}}>
                                                <Text style={{fontSize: 18, 
                                                            fontWeight: 'bold',  
                                                            color: 'rgb(23, 179, 158)'
                                                        }} 
                                                > 
                                                    {b.qty} 
                                                </Text>
                                                
                                            </View>
                                            <View style={{marginTop: 16}}>
                                                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}> {b.name} </Text>
                                                <Text style={{fontSize: 16, color: 'black'}}> {b.description} </Text>
                                            </View>
                                            <View style={{ marginLeft: 'auto', marginRight: 16, marginTop: 16 }}>
                                                <Text 
                                                    style={b.discount === '0.00' ? styles.activePrice : styles.nonActivePrice}>
                                                    {b.price} {b.currency} 
                                                </Text>
                                                {
                                                    b.discount !== '0.00' && <View 
                                                    style={{borderWidth: 1, 
                                                            borderColor: 'rgb(175, 175, 175)',
                                                            marginTop: -12
                                                            }}>
                                                    </View>
                                                }
                                                {
                                                    (b.discount) > 0 && 
                                                        <Text style={styles.discountedPrice}> 
                                                            {b.discount} {b.currency} 
                                                        </Text>
                                                }
                                            </View>
                                        </View>
                                        {
                                            i!== basket.length - 1 && <View 
                                            style={{borderWidth: 0.5, 
                                                    borderColor: 'rgb(175, 175, 175)',
                                                    marginTop: 16
                                                    }}>
                                            </View>
                                        }
                                    </>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={{flexDirection: 'row', 
                                    justifyContent: 'space-between', 
                                    backgroundColor: 'rgb(248, 248, 248)',
                                    minHeight: 50
                                    }}>
                            <View 
                                style={{ flexDirection: 'row', 
                                        justifyContent: 'flex-start', 
                                        alignItems: 'center', 
                                        marginLeft: 16}}
                            >
                                <Image
                                    source={require('./../../../public/icons/wallet.png')}
                                />
                                <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold', marginLeft: 8}}> 
                                    Cash on Delivery 
                                </Text>
                            </View>
                            <View 
                                style={{ flexDirection: 'row', 
                                        justifyContent: 'flex-end', 
                                        alignItems: 'center', 
                                        marginLeft: 16}}
                            >
                                <Text style={{color: 'black', 
                                                fontSize: 16, 
                                                fontWeight: 'bold', 
                                                marginRight: 16,
                                                color: 'rgb(23, 179, 158)'
                                            }}> 
                                        CHANGE
                                </Text>
                            </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 16, marginTop: 16}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}> Order Total</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 16}}>
                        <Text style={{fontSize: 18, color: 'black'}}> 50.00 SAR</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}> Delivery Fees</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Text style={{fontSize: 18, color: 'black'}}> 15.00 SAR</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}> VAT (15%)</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Text style={{fontSize: 18, color: 'black'}}> 15.00 SAR</Text>
                    </View>
                </View>
                <View 
                        style={{borderWidth: 0.5, 
                                    borderColor: 'rgb(175, 175, 175)',
                                    marginTop: 24
                                }}>
                </View>
                <View style={{flexDirection: 'row', marginTop: 16}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}> Total</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}> 65.00 SAR</Text>
                    </View>
                </View>
                <View 
                        style={{borderWidth: 0.5, 
                                    borderColor: 'rgb(175, 175, 175)',
                                    marginTop: 24
                                }}>
                </View>
                <View style={{flexDirection: 'row', marginTop: 16}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}> Special Instruction</Text>
                        <Text style={{fontSize: 16, color: 'black',}}> Eg. Please don't ring the bell</Text>
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Image
                            source={require('./../../../public/icons/message.png')}
                        />
                    </View>
                </View>
                <View 
                        style={{borderWidth: 0.5, 
                                    borderColor: 'rgb(175, 175, 175)',
                                    marginTop: 24
                                }}>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{borderRadius: 10, 
                            backgroundColor:'rgb(255, 137, 85)', 
                            marginLeft: 16,
                            marginRight: 16,
                            // marginTop: 16,
                            padding: 10,
                            width: Dimensions.get('window').width - 50,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                        // onPress={() => navigation.navigate('Basket') }
                    >
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> */}
                            <Text style={{ marginLeft: 16, 
                                            color: 'white',
                                            fontSize: 16,
                                            fontWeight: 'bold' }}>CONTINUE</Text>
                            
                        {/* </View> */}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
};

export default Basket;

const styles = StyleSheet.create({
    activePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    nonActivePrice: {
        fontSize: 17,
        color: 'rgb(175, 175, 175)'
    },
    discountedPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(246, 117, 117)',
        marginTop: 16
    }
})