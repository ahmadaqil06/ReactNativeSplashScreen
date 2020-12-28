import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components/';
import { Account, History, Account } from '../pages/pages';
import Dashboard from '../pages/dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
