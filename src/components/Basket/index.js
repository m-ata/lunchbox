import React, { useState } from 'react';

import { View,   
        Text, 
        TouchableOpacity, 
    } from 'react-native';
import Basket from './Basket';
import Pickup from './Pickup';

const BasketIndex = ( { navigation, route } ) => {

    const [activeTab, setActiveTab] = useState('delivery');

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
                            height: 38.1,
                            marginLeft: 16,
                            marginRight: 16,
                            borderRadius: 7,
                            backgroundColor: 'rgb(240, 240, 240)'
                        }}>
                <View style={{justifyContent: 'center', 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                width: '50%',
                                backgroundColor: activeTab === 'delivery' ? 'white' : 'rgb(240, 240, 240)', 
                                margin: 8,
                                borderRadius: 6,
                                height: 30.5
                                }}
                >
                    <TouchableOpacity onPress={() => setActiveTab('delivery')}>
                        <Text style={{fontSize: 14, lineHeight: 18, color: 'black', fontWeight: '700'}}>
                            Delivery
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{  justifyContent: 'center',
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                width: '40%',
                                backgroundColor: activeTab === 'pickup' ? 'white' : 'rgb(240, 240, 240)', 
                                margin: 8,
                                borderRadius: 6,
                                height: 30.5
                        }}
                >
                    <TouchableOpacity onPress={() => setActiveTab('pickup')}>
                        <Text style={{fontSize: 14, lineHeight: 18, color: 'black', fontWeight: '700'}}>
                            Pickup
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                activeTab === 'delivery' ? <Basket navigation={navigation} /> : <Pickup />
            }
        </View>
    )
}

export default BasketIndex;