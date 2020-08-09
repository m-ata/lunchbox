import React, { useState, useEffect } from 'react';

import { View,   
        Text, 
        TouchableOpacity, 
        StyleSheet, 
        ScrollView, 
        ImageBackground, 
        Image, 
        Dimensions,
        Animated,
        TextInput
    } from 'react-native';

const MenuDetail = ({ route, navigation}) => {

    const { menu } = route.params;
    const [choices, setChoices] = useState([
        {
            name: 'Extra Spicy',
            price: '2.00',
            currency: 'SAR',
            isSelected: false,
        },
        {
            name: 'No Extra Oil',
            price: '2.00',
            currency: 'SAR',
            isSelected: false,
        },
        {
            name: 'Extra Half Rice',
            price: '2.00',
            currency: 'SAR',
            isSelected: false,
        },
    ]);
    const [qty, setQty] = useState(0);
    const [hasFilled, setHasFilled] = useState(false);
    const [showChoices, setShowChoices] = useState(true);

    useEffect(() => {
        if (choices.length > 0) {
            const isExist = choices.find(x => x.isSelected === true) && qty > 0;
            isExist ? setHasFilled(true) : setHasFilled(false);
        }
    }, [choices, qty]);

    const handleSelectedChoice = (index) => {
        const updatedChoices = [...choices];
        updatedChoices.map((choice, i) => {
            if (i === index) choice.isSelected = true;
            else choice.isSelected = false;
        });
        setChoices(updatedChoices);
    }

    return(
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled" >
            <View style={{height: 203}}>
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
            <View style={{marginLeft: 16, marginTop: 16}}>
                    <View style={{flexDirection:'row', }}>
                        <Text style={{fontSize: 16,  fontWeight: '700', color: 'black'}}> {menu.name} </Text>
                        <Text style={{fontSize: 12, color: '#898989', marginTop: 4, marginLeft: -4, lineHeight: 14, fontWeight: '700' }} > - </Text>
                        <Text style={{fontSize: 12, color: '#898989', marginTop: 4, lineHeight: 16, fontWeight: '700' }} >KCAL 800 </Text>
                    </View>
                    <Text style={{fontSize: 13, marginTop: 8, lineHeight: 20}}> {menu.description} </Text>
            </View>
            <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                height: 45,
                                marginTop: 16
                                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                <Text style={{color: 'black', fontSize: 15, lineHeight: 18, fontWeight: '500'}}> Your Choices </Text>
                <TouchableOpacity onPress={() => setShowChoices(!showChoices)}>
                    <Image 
                        source={require('./../../../public/icons/arrow_up.png')}
                        style={{marginLeft: 8, width: 12, height: 7.7}}
                    />
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', 
                                    justifyContent: 'flex-end', 
                                    alignItems: 'center',
                                }}
                >
                    <TouchableOpacity 
                        style={{
                            backgroundColor: 'rgb(23, 179, 158)',
                            borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60.5,
                            height: 22,
                            marginRight: 16
                        }}
                    >
                        <Text style={{color: 'white', fontSize: 9, lineHeight: 11, fontWeight: '700',}}> REQUIRED </Text>
                    </TouchableOpacity>
                </View>
                </View>
                {
                    showChoices && <View>
                    {
                        choices.map((c, i) => {
                            return(
                                <>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', minHeight: 50}} >
                                        <View style={{ flexDirection: 'row', 
                                                        justifyContent: 'flex-start', 
                                                        alignItems: 'center', 
                                                        marginLeft: 16}} 
                                                onStartShouldSetResponder={() => {
                                                    handleSelectedChoice(i);
                                                }}
                                        >
                                            <Image
                                            source={c.isSelected ? require('./../../../public/icons/radio_selected.png') :
                                             require('./../../../public/icons/radio.png')}
                                             style={{width: 20, height: 20}}
                                            />
                                            <Text style={{ fontSize: 14, 
                                                            lineHeight: 19,
                                                            fontWeight: '600', 
                                                            color: c.isSelected ? 'rgb(23, 179, 158)' : 'black',
                                                            marginLeft: 8
                                                        }}> {c.name} </Text>
                                        </View>
                                        <View style={{  flexDirection: 'row', 
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        marginRight: 16,
                                                        fontSize: 13, 
                                                        lineHeight: 20,
                                                        color: 'black'
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
                    </View>
                }
                <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                height: 45,
                                marginTop: showChoices ? 0 :  16
                                }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                            <Text style={{color: 'black', fontSize: 14, lineHeight: 16, fontWeight: '500'}}> How many ? </Text>
                        </View>
                </View>
                    <View style={{flexDirection: 'row', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        margin: 24
                        }}>
                        <TouchableOpacity onPress={() => setQty(prevQty => prevQty - 1)}>
                            <Image
                                source={require('./../../../public/icons/minus.png')}
                                style={{height: 40, width: 40}}
                            />
                        </TouchableOpacity>
                        <Text style={{marginLeft: 20, fontSize: 16,  fontWeight: 'bold'}}> 
                                { qty }
                        </Text>
                        <TouchableOpacity onPress={() => setQty(prevQty => prevQty + 1)}>
                            <Image
                                source={require('./../../../public/icons/plus.png')}
                                style={{ marginLeft: 16, height: 40, width: 40}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                height: 45
                                }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                            <Text style={{color: 'black', fontSize: 14, lineHeight: 16, fontWeight: '500'}}> Special Instruction </Text>
                        </View>
                    </View>
                    <View style={{ 
                                    marginLeft: 16,
                                    borderRadius: 10,
                                    flexDirection: 'row', 
                                    justifyContent: 'flex-start', 
                                    alignItems: 'flex-start',
                                    height: 60
                                    }} 
                    >
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Add a note (extra sauce, no onions, etc)"
                            placeholderTextColor="black"
                            style={{fontSize: 14, lineHeight: 16}}
                            // numberOfLines={3}
                            multiline={true}
                        />
                    </View>
            <View style={{flexDirection: 'row', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: 122,
                        }}>
                <TouchableOpacity
                    style={{borderRadius: 10, 
                        backgroundColor: hasFilled ? '#ff8955' : '#b2b2b2', 
                        marginLeft: 16,
                        marginRight: 16,
                        height: 50,
                        padding: 10,
                        width: Dimensions.get('window').width - 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    disabled={hasFilled ? false: true}
                    onPress={() => navigation.navigate('Basket', {isHeaderVisible: true}) }
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={[styles.buttonText, { marginLeft: 16 }]}>ADD TO BASKET</Text>
                        
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={[styles.buttonText, { marginRight: 16 }]}> 45.00 SAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
        position: 'absolute',
        top: 30,
        bottom: 0,
        right: 0,
        left: Dimensions.get('window').width - 80,
        width: 38,
        height: 38
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 18
    }
})