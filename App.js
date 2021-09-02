import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { View,StyleSheet, TextInput,Text } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/component/AppButton';
import Card from './app/component/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import MenuIcons from './app/component/MenuIcons';
import colors from './app/config/colors';
import Screen from './app/component/Screen';
import ListingScreen from './app/screens/ListingScreen';
import AppPicker from './app/component/AppPicker';
import AppTextInput from './app/component/AppTextInput';


export default function App() {
  
 return(
   <Screen>
   <AppPicker placeholder="Category" icon="apps"/>
   <AppTextInput placeholder="Username"/>
   </Screen>
 );
 

}