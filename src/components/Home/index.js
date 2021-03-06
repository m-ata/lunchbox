import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { Picker, Text, TouchableOpacity, Image, View } from 'react-native';
import SignIn from "../Auth/SignIn";
import Menus from "./Menus";
import MenuDetail from "./MenuDetail";
import BasketIndex from "../Basket";
import OrderPlace from "../Order/OrderPlace";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  const [selectedValue, setSelectedValue] = useState('riyadh')
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={() => {
         return {
          headerTitle: () => <Text
          style={{  
                    alignSelf: 'center', 
                    color: 'white',
                  }}
        >
          <Text style={{ alignSelf: 'center',  fontWeight: 'bold', height: 21, width: 132, fontSize: 18, lineHeight: 21}}> Welcome to TLB</Text>
        </Text>,
        headerStyle: {
          backgroundColor: 'rgb(255, 137, 85)'
        },
        headerTintColor: '#ffffff',
        }
      }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}}
       />
      <Stack.Screen name="Menus" component={Menus}
          options={({navigation, route}) => {
            return {
              headerTitle: () => <View style={{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{fontSize: 12, 
                lineHeight: 14, 
                color: 'white',
                }}>The LunchBox</Text>
                <TouchableOpacity style={{flexDirection: 'row',}}>
                  <Text style={{
                    fontSize: 15,
                    lineHeight: 20,
                    fontWeight: '500',
                    color: 'white'
                  }}>
                    {route.params.Locations[0].Name}
                  </Text>
                  <Image 
                      source={require('./../../../public/icons/down_arrow.png')}
                      style={{height: 8, width: 13, marginLeft: 8, marginTop: 6}}
                  />
                </TouchableOpacity>
              </View>,
              headerStyle: {
                backgroundColor: 'rgb(255, 137, 85)',
                color: '#ffffff',
                alignSelf: 'center'
              },
              // headerTintColor: '#ffffff',
              headerLeft: () => <TouchableOpacity style={{marginLeft: 16}} onPress={() => navigation.goBack()}>
              <Image
                source={require('./../../../public/icons/back_icon.png')}
                style={{width: 33, height: 33}}
              />
            </TouchableOpacity>,
              headerRight: () => <TouchableOpacity style={{marginRight: 16}}>
                <Image
                source={require('./../../../public/icons/search.png')}
                style={{width: 33, height: 33}}
              />
              </TouchableOpacity>
              }
          }}
       />
       <Stack.Screen 
          name="MenuDetail" 
          component={MenuDetail}
          options={{headerShown: false,}}

       />
       <Stack.Screen 
          name="Basket"
          component={BasketIndex}
          initialParams={{isHeaderVisible: true}}
          options={({navigation, route}) => {
            return {
              headerStyle: {
                backgroundColor: 'rgb(255, 137, 85)',
              },
              headerShown: route.params.isHeaderVisible,
              headerTitle: () => <>
              <Text style={{  fontSize: 14,
                lineHeight: 16,
                alignSelf: 'center', 
                color: 'white' ,
                fontWeight: '600'
              }}
              >Your Basket</Text>
              <Text style={{  fontSize: 12,
                lineHeight: 14,
                alignSelf: 'center', 
                color: 'white' ,
                fontWeight: '600'
              }}
              >The LunchBox, Al Murabba</Text>
              </>,
              headerLeft: () => <TouchableOpacity style={{marginLeft: 16}} onPress={() => navigation.goBack()}>
              <Image
                source={require('./../../../public/icons/back_icon.png')}
                style={{height: 33, width: 33}}
              />
            </TouchableOpacity>
            }
          }
          }
       />
       <Stack.Screen 
          name="OrderPlace"
          component={OrderPlace}
          options={{headerShown: false,}}
       />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;