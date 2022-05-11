import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createStackNavigator();

const FeedNavigator = () =>(
  <Stack.Navigator screenOptions={{headerShown:false,presentation:'modal'}}>
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="Listing Details" component={ListingDetailScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;