import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import MenuIcons from './MenuIcons';

function CategoryPickerItem({item,onPress}) {
    return (
        <View style={styles.container}> 
        <TouchableOpacity onPress={onPress}>    
      <MenuIcons  backgroundColor={item.bgcolor}  name={item.icon} size={70}/>
      <AppText style={styles.label}>{item.label}</AppText>
       </TouchableOpacity>
       </View> 
        
    );
}
const styles = StyleSheet.create({
    container:{
    padding:25,
    alignItems:"center",
    width:'33%'
    
    },
    label:{
     marginTop:5, 
     
    }
})

export default CategoryPickerItem;