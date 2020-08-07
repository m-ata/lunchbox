import React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from '../Auth/SignUp';
import MainStackNavigator from '.';
import Dummy from '../Auth/Dummy';

const Tab = createBottomTabNavigator();

const activeTintLabelColor = '#f0a56c';
const inactiveTintLabelColor = 'grey';

const TabNavigator = () => {
    return (
        <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, fontWeight: 'bold', color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >Home</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./../../../public/icons/home.png')}
        />,
        }} />
      <Tab.Screen name="Order" component={Dummy} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, fontWeight: 'bold', color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >Order</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./../../../public/icons/order.png')}
        />,
        }} />
      <Tab.Screen name="Offer" component={Dummy} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, fontWeight: 'bold', color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >Offer</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./../../../public/icons/offer.png')}
        />,
        }} />
      <Tab.Screen name="More" component={Dummy} options={{
          tabBarLabel: ({focused}) => {
            return <Text  style={{fontSize: 15, fontWeight: 'bold', color: focused ? activeTintLabelColor : inactiveTintLabelColor }} >More</Text>
          },
          tabBarIcon: ({ focused }) => 
          <Image
          style={{
            width: focused ? 30 : 24,
            height: focused ? 30 : 24,
          }}
          source={require('./../../../public/icons/more.png')}
        />,
        }} />
      </Tab.Navigator>
    )
};
export default TabNavigator;