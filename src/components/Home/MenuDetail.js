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
                    <TouchableOpacity onPress={() => setShowChoices(!showChoices)}>
                        <Image 
                            source={require('./../../../public/icons/arrow_up.png')}
                            style={{marginLeft: 8}}
                        />
                    </TouchableOpacity>
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
                {
                    showChoices && <ScrollView>
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
                                            <Text style={{ fontSize: 17, 
                                                            fontWeight: 'bold', 
                                                            color: c.isSelected ? 'rgb(23, 179, 158)' : 'black',
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
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                            <Text style={{color: 'black', fontSize: 18,}}> How many ? </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: 100}}>
                        <TouchableOpacity onPress={() => setQty(prevQty => prevQty - 1)}>
                            <Image
                                source={require('./../../../public/icons/minus.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{marginLeft: 16, fontSize: 20, fontWeight: 'bold'}}> 
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
                                minHeight: 50
                                }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 16}}>
                            <Text style={{color: 'black', fontSize: 18,}}> Special Instruction </Text>
                        </View>
                    </View>
                    <View style={{borderWidth: 1, 
                                    borderColor: 'grey', 
                                    margin: 16,
                                    borderRadius: 10,
                                    flexDirection: 'row', 
                                    justifyContent: 'flex-start', 
                                    alignItems: 'flex-start'
                                    }} 
                    >
                        <TextInput
                            style={{height: 100,  }}
                            underlineColorAndroid="transparent"
                            placeholder="Special Instruction"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </ScrollView>
                }
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                    style={{borderRadius: 10, 
                        backgroundColor: hasFilled ? 'rgb(255, 137, 85)' : 'rgb(178, 178, 178)', 
                        marginLeft: 16,
                        marginRight: 16,
                        // marginTop: 16,
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