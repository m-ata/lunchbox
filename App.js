import React from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import Home from './src/components/Home/index.js';
import SignUp from './src/components/Auth/SignUp.js';
import SignIn from './src/components/Auth/SignIn.js';
import SplashScreen from './src/components/Splash/index.js';
import MainStackNavigator from './src/components/Home/index.js';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const activeTintLabelColor = '#f0a56c';
const inactiveTintLabelColor = 'grey';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >Home</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./public/icons/home.png')}
        />,

        }} />
      <Tab.Screen name="Order" component={SignUp} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >Order</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./public/icons/order.png')}
        />,
        }} />
      <Tab.Screen name="Offer" component={SignUp} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >Offer</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./public/icons/offer.png')}
        />,
        }} />
      <Tab.Screen name="More" component={SignUp} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >More</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./public/icons/more.png')}
        />,
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
