import React, { useState } from 'react';

import { View,   
        Text, 
        TouchableOpacity, 
    } from 'react-native';
import Basket from './Basket';
import Pickup from './Pickup';

const BasketIndex = () => {

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
                                backgroundColor: activeTab === 'delivery' ? 'white' : 'rgb(240, 240, 240)', 
                                margin: 8,
                                borderRadius: 10,
                                height: 40
                                }}
                >
                    <TouchableOpacity onPress={() => setActiveTab('delivery')}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Delivery</Text>
                    </TouchableOpacity>
                </View>
                <View style={{  justifyContent: 'center',
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                width: '40%',
                                backgroundColor: activeTab === 'pickup' ? 'white' : 'rgb(240, 240, 240)', 
                                margin: 8,
                                borderRadius: 10,
                                height: 40
                        }}
                >
                    <TouchableOpacity onPress={() => setActiveTab('pickup')}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pickup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                activeTab === 'delivery' ? <Basket /> : <Pickup />
            }
        </View>
    )
}

export default BasketIndex;