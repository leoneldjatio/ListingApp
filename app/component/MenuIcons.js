import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native';

function MenuIcons({name,size,color="#fff",backgroundColor="#000"}) {
    return (
        
        <View style={{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor:backgroundColor,
            justifyContent:"center",
            alignItems:"center",
            
            
        }}>
            <MaterialCommunityIcons   name={name} size={size/2} color={color}/>
        </View>
        
    );
}

export default MenuIcons;