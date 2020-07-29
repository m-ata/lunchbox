import React from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Home from './src/components/Home/index.js';
import SplashScreen from './src/components/Splash/index.js';
import TabNavigator from './src/components/Home/TabNavigation.js';

const Stack = createStackNavigator();

const activeTintLabelColor = '#f0a56c';
const inactiveTintLabelColor = 'grey';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen}  />
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerLeft: null}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
