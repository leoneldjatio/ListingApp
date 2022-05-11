import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect} from 'react';
import { View,StyleSheet, TextInput,Text, Button, Image } from 'react-native';

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
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import AppFormPicker from './app/component/forms/AppFormPicker';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListItems from './app/component/ListItems';
import ImageInput from './app/component/ImageInput';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'
import ImageInputList from './app/component/ImageInputList';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/component/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import {AppLoading} from 'expo';



export default function App() {

  const [isReady,setisReady] = useState(false);

    const restoreUser = async () =>{
     const user = await authStorage.getUser();
      if(user) setUser(user);
      
    };

    if(!isReady){
      <AppLoading startAsync={restoreUser} onFinish={()=> setisReady(true)}/>
    }

  const [user, setUser] = useState();
 useEffect(()=>{
   restoreUser();
 },[]);
  
 return(
   <AuthContext.Provider value={{user,setUser}}>
   <OfflineNotice />
   <NavigationContainer theme={navigationTheme}>
      {user? <AppNavigator/>: <AuthNavigator/>}
   </NavigationContainer>
   </AuthContext.Provider>
 );
 

};