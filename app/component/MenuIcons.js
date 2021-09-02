import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function MenuIcons({name,size,color="white",backColor="primary",isize,content,text}) {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor:backColor,
            justifyContent:content,
            alignItems:"center",
            
            
        }}>
            <MaterialCommunityIcons  name={name} size={size/2} color={color}/>
        </View>
    );
}

export default MenuIcons;