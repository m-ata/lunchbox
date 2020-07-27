import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import SplashScreen from "../Splash";
import { Picker, Text } from 'react-native';


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
          {/* <Picker.Item label="Al Murabba, Riyadh" value="murabba" />
          <Picker.Item label="Al Murabba, Makkah" value="makkah" /> */}
        </Text>,
        headerStyle: {
          backgroundColor: '#f0a56c'
        },
        headerTintColor: '#ffffff',
        }
      }} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;