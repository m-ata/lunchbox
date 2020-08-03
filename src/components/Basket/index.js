import React, { useState, useEffect } from 'react';

import { View,   
        Text, 
        TouchableOpacity, 
        StyleSheet, 
        ScrollView, 
        ImageBackground, 
        Image, 
        Dimensions,
        TextInput
    } from 'react-native';

const BasketIndex = () => {

    return (
        <View style={{flex: 1,
                    backgroundColor: 'white'
                    }}
        >
            <View style={{flexDirection: 'row', 
                            justifyContent: 'flex-start', 
                            alignItems: 'center', 
                            borderWidth: 1,
                            marginTop: 16,
                            height: 56,
                            marginLeft: 16,
                            marginRight: 16,
                            borderRadius: 10,
                            backgroundColor: 'rgb(240, 240, 240)'
                        }}>
                <View style={{justifyContent: 'center', 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                width: '50%',
                                backgroundColor: 'white', 
                                margin: 8,
                                borderRadius: 10,
                                height: 40
                                }}
                >
                    <TouchableOpacity>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Delivery</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center',
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                width: '40%',
                                backgroundColor: 'rgb(240, 240, 240)', 
                                margin: 8,
                                borderRadius: 10,
                                height: 40
            }}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pickup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BasketIndex;