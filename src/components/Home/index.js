import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { Picker, Text, TouchableOpacity, Image } from 'react-native';
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
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Menus" component={Menus}
          options={({navigation}) => {
            return {
              headerTitle: () => <Picker 
                  selectedValue={selectedValue}   
                  onValueChange={(value) => setSelectedValue(value)}
                   style={{ height: 40, 
                      width: 210,
                      alignSelf: 'center', 
                      color: 'white' ,
                      fontSize: 18,
                      lineHeight: 21
                    }}>
                <Picker.Item  label="Al Murabba, Riyadh" value="riyadh" />
                <Picker.Item label="Al Murabba, Makkah" value="makkah" />
              </Picker>,
              headerStyle: {
                backgroundColor: 'rgb(255, 137, 85)',
                color: '#ffffff',
                alignSelf: 'center'
              },
              // headerTintColor: '#ffffff',
              headerLeft: () => <TouchableOpacity style={{marginLeft: 16}} onPress={() => navigation.goBack()}>
              <Image
                source={require('./../../../public/icons/back_icon.png')}
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
          options={({navigation}) => {
            return {
              headerStyle: {
                backgroundColor: 'rgb(255, 137, 85)',
              },
              headerTitle: () => <>
              <Text style={{  fontSize: 18,
                lineHeight: 18,
                alignSelf: 'center', 
                color: 'white' ,
                fontWeight: '400'
              }}
              >Your Basket</Text>
              <Text style={{  fontSize: 15.5,
                lineHeight: 21,
                alignSelf: 'center', 
                color: 'white' ,
                fontWeight: '600'
              }}
              >The LunchBox, Al Murabba</Text>
              </>,
              headerLeft: () => <TouchableOpacity style={{marginLeft: 16}} onPress={() => navigation.goBack()}>
              <Image
                source={require('./../../../public/icons/back_icon.png')}
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