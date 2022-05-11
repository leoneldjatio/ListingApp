import React from 'react';
import { TextInput, View,StyleSheet } from 'react-native';


import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../config/styles';


function AppTextInput({icon,width='100%',...otherprops}) {
    return (
        
       <View style={[styles.container, {width} ]}>
           <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>
           <TextInput
           placeholderTextColor={defaultStyles.colors.medium}
           style={defaultStyles.text} {...otherprops} />

       </View>
      
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.lightGrey,
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10,
    },
   
    icon:{
        marginRight:10,
    }
})

export default AppTextInput;