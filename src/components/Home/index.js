import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import SplashScreen from "../Splash";
import { Picker, Text } from 'react-native';
import SignIn from "../Auth/SignIn";
import Menus from "./menus";
import MenuDetail from "./MenuDetail";

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
          backgroundColor: '#f0a56c'
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
                backgroundColor: '#f0a56c',
                color: '#ffffff',
                alignSelf: 'center'
              },
              headerTintColor: '#ffffff',
              }
          }}
       />
       <Stack.Screen name="MenuDetail" component={MenuDetail} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;