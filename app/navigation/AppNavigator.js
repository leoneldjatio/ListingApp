import React,{useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigator from './FeedNavigator';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';


const Tab = createBottomTabNavigator();
const AppNavigator =() =>{
  
useEffect(()=>{
  registerForPushNotifications();
},[]);
   const registerForPushNotifications = async()=>{
     
     try {
      const permission=await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if(!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
     } catch (error) {
       console.log("Error getting a push token",error);
     }
     
}
  
  
  return (
    <Tab.Navigator
    tapBarOptions={{

    }}
    >
      <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
      headerShown:false,    
      tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" size={size} color={color} />    
      }}
      /> 
     <Tab.Screen
     name="Listing Edit"
     component={ListingEditScreen}
     options={({navigation})=> ({
      headerShown:false,
      tabBarButton:() => <NewListingButton onPress={()=>navigation.navigate("Listing Edit")}/>,
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="plus-circle" size={size} color={color} />    
        })}
     />
     <Tab.Screen
     name="My Account"
     component={AccountNavigator}
     options={{
      headerShown:false,
        tabBarIcon:({color,size})=><MaterialCommunityIcons name="account" size={size} color={color}/>    
        }}
     />  
    </Tab.Navigator>    
    );}

    export default AppNavigator;