import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { Picker, Text } from 'react-native';
import SignIn from "../Auth/SignIn";
import Menus from "./menus";
import MenuDetail from "./MenuDetail";
import BasketIndex from "../Basket";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={() => {
         return {
          headerTitle: () => <Text
          style={{  fontSize: 20,
                    alignSelf: 'center', 
                    color: 'white' 
                  }}
        >
          Welcome to <Text style={{ fontWeight: 'bold'}}>TLB</Text>
        </Text>,
        headerStyle: {
          backgroundColor: 'rgb(255, 137, 85)'
        },
        headerTintColor: '#ffffff',
        }
      }} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Menus" component={Menus}
          options={() => {
            return {
              headerTitle: () => <Picker    
                   style={{ height: 50, 
                      width: 250,
                      alignSelf: 'center', 
                      color: 'white' 
                    }}>
                <Picker.Item label="Al Murabba, Riyadh" value="murabba" />
                <Picker.Item label="Al Murabba, Makkah" value="makkah" />
              </Picker>,
              headerStyle: {
                backgroundColor: 'rgb(255, 137, 85)',
                color: '#ffffff',
                alignSelf: 'center'
              },
              headerTintColor: '#ffffff',
              }
          }}
       />
       <Stack.Screen 
          name="MenuDetail" 
          component={MenuDetail}
          options={{headerShown: false}}

       />
       <Stack.Screen 
          name="Basket"
          component={BasketIndex}
          options={() => {
            return {
              headerStyle: {
                backgroundColor: 'rgb(255, 137, 85)',
                color: '#ffffff',
                alignSelf: 'center'
              },
              headerTitle: <Text style={{  fontSize: 20,
                alignSelf: 'center', 
                color: 'white' 
              }}>Your Basket</Text>
            }
          }
          }
       />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;