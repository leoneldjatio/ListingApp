import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
      <MaterialCommunityIcons name="plus-circle" size={30} color={colors.white}/>
    </View>
   </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:colors.primary,
      borderRadius:35,
      bottom:22,
      alignItems:"center",
      justifyContent:"center",
      borderColor:colors.white,
      borderWidth:10,
      width:70,
      height:70,
  }
});

export default NewListingButton;