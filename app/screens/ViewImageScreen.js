import React from 'react';
import {StyleSheet,Image,View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

const image = require("../assets/chair.jpg");
function ViewImageScreen(props) {

    return (
        <View style={styles.container}>
        
        <View style={styles.closeIcon}><MaterialCommunityIcons name="close" size={35} color="white"/></View>
        <View style={styles.deleteIcon}><MaterialCommunityIcons name="trash-can-outline" size={35} color="white"/></View> 
        
        <Image source={image} style={styles.image}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.black,
      flex:1,
    },
    image:{
     resizeMode:"contain",
     width:"100%",
     height:"100%",
     
    },
    closeIcon:{   
     position:"absolute",
     top:20,
     left:10,
    },
    deleteIcon:{  
     position:"absolute",
     top:20,
     right:10,
    
       },
    
})