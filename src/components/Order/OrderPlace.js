import React from 'react';

import { View,   
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground, 
    Image,
} from 'react-native';

const OrderPlace =  ({ navigation }) => {
    
    return (
        <View style={styles.container} >
            <View>
                <ImageBackground
                        style={{height: '100%', width: '100%', resizeMode: 'cover', opacity: 1}}
                        source={require('./../../../public/images/order_place.png')}
                    >
                        <ImageBackground
                        style={{height: '100%', width: '100%', resizeMode: 'cover', opacity: 1}}
                        source={require('./../../../public/images/empty_order_place.png')}
                        >
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 'auto',
                    }}>
                            <Image 
                                source={require('./../../../public/icons/success.png')} 
                                // style={styles.iconStyle}
                            />
                            <Text style={styles.orderPlaceText}>
                                Order Placed
                            </Text>
                            <Text style={styles.heading}>
                                The LunchBox, Al Murabba
                            </Text>
                            <Text style={styles.description}>
                            Your order is placed and sent to kitchen
                            </Text>
                            <Text style={{fontSize: 19.5,
                                            lineHeight: 25,
                                            color: 'rgb(255, 255, 255)',}}
                            >
                                Once it will be ready we will notify you
                            </Text>
                            <Text style={styles.thanks}>
                                Thank you !!
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', 
                                        marginTop: 'auto', marginBottom: 40}}>
                            <TouchableOpacity 
                                style={{
                                    backgroundColor: 'rgb(255, 137, 85)',
                                    borderRadius: 10.4,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 390,
                                    height: 65,
                                }}
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text style={{color: 'white', fontSize: 18, lineHeight: 23.5}}>
                                    TRACK MY ORDER
                                </Text>
                            </TouchableOpacity>
                            <Text style={{fontSize: 19.5, lineHeight: 27, color: 'white', marginTop: 16}}>Order More</Text>
                        </View>
                        </ImageBackground>
                    </ImageBackground>
            </View>
    </View>
    )
};

export default OrderPlace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    orderPlaceText: {
        fontSize: 41.5,
        lineHeight: 49.5,
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        marginTop: 16
    },
    heading: {
        fontSize: 22,
        lineHeight: 26,
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        marginTop: 16
    },
    description: {
        fontSize: 19.5,
        lineHeight: 25,
        color: 'rgb(255, 255, 255)',
        marginTop: 16,
        fontWeight: '500'
    },
    thanks: {
        fontSize: 26,
        lineHeight: 31,
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bold',
        marginTop: 16
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 23
    }
})
