import React from 'react';

import { View,   
        Text, 
        TouchableOpacity, 
        StyleSheet, 
        ScrollView, 
        ImageBackground, 
        Image, 
        Dimensions 
    } from 'react-native';

const MenuDetail = ({ route, navigation}) => {

    const { menu } = route.params;

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
            <View style={{height: 200, marginLeft: 16, marginTop: 16}}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}> {menu.name} </Text>
                        <Text style={{fontSize: 16, marginTop: 4, marginLeft: -4 }} > - </Text>
                        <Text style={{fontSize: 16, marginTop: 4 }} >KCAL 800 </Text>
                    </View>
                    <Text style={{fontSize: 16, marginTop: 8}}> {menu.description} </Text>
                </ScrollView>
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
    }
})