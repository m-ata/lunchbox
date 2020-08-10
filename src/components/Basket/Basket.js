import React, { useState } from 'react';

import { View,   
    Text, 
    TouchableOpacity, 
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';


const Basket = ({ navigation }) => {

    const basket = [
        {
            name: 'Chicken Karhai Half',
            description: 'Extra spicy, Half rice',
            price: '45.00',
            discount: '0.00',
            currency: 'SAR',
            qty: '2x'
        },
        {
            name: 'Special Biryani',
            description: 'Extra spicy, Half rice',
            price: '45.00',
            discount: '20.00',
            currency: 'SAR',
            qty: '1x'
        },
        {
            name: 'Chicken Karahi Half',
            description: 'Extra spicy, Half rice',
            price: '45.00',
            discount: '0.00',
            currency: 'SAR',
            qty: '2x'
        },
    ]

    const [bounceValue, setBounceValue] = useState(new Animated.Value(100));
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showHeader, setShowHeader] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

      const onLoginClose = () => {
        setShowLogin(false);
        navigation.setParams({isHeaderVisible: showHeader});
        setShowHeader(!showHeader);
      }

      const onLoggedIn = () => {
        setLoggedIn(true);
        setShowLogin(false);
        navigation.setParams({isHeaderVisible: showHeader});
        setShowHeader(!showHeader);
      }

      const handleSignUpRedirect = () => {
        setShowLogin(false);
        setShowSignUp(true);
      }

    return (
        <View style={{flex: 1}} >
            <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={{height: 250, marginTop: 16}}>
                        {
                            basket.map((b, i) => {
                                return (
                                    <>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{margin: 16}}>
                                                <Text style={{fontSize: 15, 
                                                            fontWeight: 'bold',  
                                                            color: 'rgb(23, 179, 158)',
                                                            lineHeight: 18
                                                        }} 
                                                > 
                                                    {b.qty} 
                                                </Text>
                                                
                                            </View>
                                            <View style={{marginTop: 16}}>
                                                <Text style={{fontSize: 15, 
                                                            fontWeight: '700', 
                                                            color: 'black',
                                                            lineHeight: 18
                                                        }}
                                                            > {b.name} </Text>
                                                <Text style={{fontSize: 13, 
                                                            color: 'black', 
                                                            lineHeight: 20}}> {b.description} </Text>
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
                                                            marginTop: -9,
                                                            width: 61,
                                                            marginLeft: 4
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
                <View style={{flexDirection: 'row', 
                                    justifyContent: 'space-between', 
                                    backgroundColor: 'rgb(248, 248, 248)',
                                    height: 61
                                    }}>
                            <View 
                                style={{ flexDirection: 'row', 
                                        justifyContent: 'flex-start', 
                                        alignItems: 'center', 
                                        marginLeft: 16}}
                            >
                                <Image
                                    source={require('./../../../public/icons/wallet.png')}
                                    style={{
                                        height: 18,
                                        width: 26.5
                                    }}
                                />
                                <Text style={{color: 'black', lineHeight: 16, fontSize: 14, fontWeight: '700', marginLeft: 8}}> 
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
                                                fontSize: 12, 
                                                fontWeight: 'bold', 
                                                marginRight: 16,
                                                color: 'rgb(23, 179, 158)',
                                                lineHeight: 16,
                                                height: 18,
                                                width: 65
                                            }}> 
                                        CHANGE
                                </Text>
                            </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 16, marginTop: 16}}>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'black', lineHeight: 20}}> Order Total</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 16}}>
                        <Text style={{fontSize: 14, color: 'black', lineHeight: 16, fontWeight: '600'}}> 50.00 SAR</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'black', lineHeight: 20}}> Delivery Fees</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Text style={{fontSize: 14, color: 'black', lineHeight: 16, fontWeight: '600'}}> 15.00 SAR</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'black', lineHeight: 20}}> VAT (15%)</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Text style={{fontSize: 14, color: 'black', lineHeight: 16, fontWeight: '600'}}> 15.00 SAR</Text>
                    </View>
                </View>
                <View 
                        style={{borderWidth: 0.5, 
                                    borderColor: 'rgb(175, 175, 175)',
                                    marginTop: 24
                                }}>
                </View>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', lineHeight: 20}}> Total</Text> 
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold', lineHeight: 21}}> 65.00 SAR</Text>
                    </View>
                </View>
                <View 
                        style={{borderWidth: 0.5, 
                                    borderColor: 'rgb(175, 175, 175)',
                                    marginTop: 16
                                }}>
                </View>
                <View style={{flexDirection: 'row', marginTop: 16}}>
                    <View style={{marginLeft: 16, marginTop: 8}}>
                        <Text style={{fontSize: 14, fontWeight: '600', color: 'black', lineHeight: 16}}> Special Instruction</Text>
                        <Text style={{fontSize: 13, color: 'black', lineHeight: 20,}}> Eg. Please don't ring the bell</Text>
                    </View>
                    <View style={{marginRight: 16, marginLeft: 'auto', marginTop: 8}}>
                        <Image
                            source={require('./../../../public/icons/message.png')}
                            style={{
                                width: 23.9,
                                height: 22
                            }}
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
                            backgroundColor:'#ff8955', 
                            marginLeft: 16,
                            marginRight: 16,
                            marginTop: 24,
                            marginBottom: 24,
                            padding: 10,
                            width: Dimensions.get('window').width - 50,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50
                        }}
                        onPress={() => {
                            if(isLoggedIn) {
                                navigation.navigate('OrderPlace')
                            } else {
                                navigation.setParams({isHeaderVisible: showHeader});
                            setShowHeader(!showHeader);
                            setShowLogin(true)
                            }
                        }}
                    >
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> */}
                            <Text style={{ marginLeft: 16, 
                                            color: 'white',
                                            fontSize: 14,
                                            lineHeight: 18,
                                            fontWeight: 'bold',
                                            // height: 16,
                                            // width: 92 
                                            }}>CONTINUE</Text>
                            
                        {/* </View> */}
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {
                showLogin && <Animated.View
                style={[styles.subView,
                  {transform: [{translateY: bounceValue}]}]}
              >
                <SignIn onClose={onLoginClose} onLoggedIn={onLoggedIn} handleSignUp={handleSignUpRedirect} />
              </Animated.View>
            }
            {
                showSignUp && <Animated.View
                style={[styles.subView,
                  {transform: [{translateY: bounceValue}]}]}
              >
                <SignUp  />
              </Animated.View>
            }
        </View>
    )
};

export default Basket;

const styles = StyleSheet.create({
    activePrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 16
    },
    nonActivePrice: {
        fontSize: 13,
        color: '#afafaf',
        lineHeight: 15,
    },
    discountedPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f67575',
        marginTop: 16,
        lineHeight: 16
    },
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: Dimensions.get('window').height,
      }
})