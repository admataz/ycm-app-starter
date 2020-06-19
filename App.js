import "react-native-gesture-handler";
import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './App/screens/Home';
import Translate from './App/screens/Translate';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Translate" component={Translate} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


