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
            <View style={{height: 264}}>
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
                    <View style={{flexDirection:'row', lineHeight: 18,}}>
                        <Text style={{fontSize: 21,   fontWeight: 'bold', color: 'black'}}> {menu.name} </Text>
                        <Text style={{fontSize: 15.6, marginTop: 4, marginLeft: -4 }} > - </Text>
                        <Text style={{fontSize: 15.6, marginTop: 4 }} >KCAL 800 </Text>
                    </View>
                    <Text style={{fontSize: 16.9, marginTop: 8, lineHeight: 26}}> {menu.description} </Text>
            </View>
            <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                height: 58.5,
                                marginTop: 16
                                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                <Text style={{color: 'black', fontSize: 19.5, lineHeight: 23.5}}> Your Choices </Text>
                <TouchableOpacity onPress={() => setShowChoices(!showChoices)}>
                    <Image 
                        source={require('./../../../public/icons/arrow_up.png')}
                        style={{marginLeft: 8}}
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
                            borderRadius: 6.5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 78.6,
                            height: 28.6,
                            marginRight: 16
                        }}
                    >
                        <Text style={{color: 'white', fontSize: 12, lineHeight: 14}}> REQUIRED </Text>
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
                                            />
                                            <Text style={{ fontSize: 18, 
                                                            lineHeight: 25,
                                                            fontWeight: '600', 
                                                            color: c.isSelected ? 'rgb(23, 179, 158)' : 'black',
                                                            marginLeft: 8
                                                        }}> {c.name} </Text>
                                        </View>
                                        <View style={{  flexDirection: 'row', 
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'center',
                                                        marginRight: 16,
                                                        fontSize: 17, 
                                                        lineHeight: 26,
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
                                height: 58.5,
                                marginTop: showChoices ? 0 :  16
                                }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                            <Text style={{color: 'black', fontSize: 18,}}> How many ? </Text>
                        </View>
                </View>
                    <View style={{flexDirection: 'row', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        margin: 24
                        // minHeight: 100
                        }}>
                        <TouchableOpacity onPress={() => setQty(prevQty => prevQty - 1)}>
                            <Image
                                source={require('./../../../public/icons/minus.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{marginLeft: 16, fontSize: 26,  fontWeight: 'bold'}}> 
                                { qty }
                        </Text>
                        <TouchableOpacity onPress={() => setQty(prevQty => prevQty + 1)}>
                            <Image
                                source={require('./../../../public/icons/plus.png')}
                                style={{ marginLeft: 16}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', 
                                justifyContent: 'space-between', 
                                backgroundColor: 'rgb(248, 248, 248)',
                                height: 58.5
                                }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                            <Text style={{color: 'black', fontSize: 18, lineHeight: 21}}> Special Instruction </Text>
                        </View>
                    </View>
                    <View style={{ 
                                    marginLeft: 16,
                                    borderRadius: 10,
                                    flexDirection: 'row', 
                                    justifyContent: 'flex-start', 
                                    alignItems: 'flex-start',
                                    height: 85
                                    }} 
                    >
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Add a note (extra sauce, no onions, etc)"
                            placeholderTextColor="black"
                            style={{fontSize: 18, lineHeight: 21}}
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
                        backgroundColor: hasFilled ? 'rgb(255, 137, 85)' : 'rgb(178, 178, 178)', 
                        marginLeft: 16,
                        marginRight: 16,
                        height: 65,
                        padding: 10,
                        width: Dimensions.get('window').width - 50,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    disabled={hasFilled ? false: true}
                    onPress={() => navigation.navigate('Basket') }
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
        left: Dimensions.get('window').width - 80
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})