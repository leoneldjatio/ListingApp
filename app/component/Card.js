import React from 'react';
import { View,Text, StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';

function Card({title,subtitle,imageUrl,onPress,thumbnailUrl}) {
    return (
       <TouchableWithoutFeedback onPress={onPress}> 
       <View style={styles.card}>
           <Image style={styles.image} preview={{uri:thumbnailUrl}} uri={imageUrl} tint='light'/>
           <Text style={styles.title}>{title}</Text>
           <Text style={styles.subtitle}>{subtitle}</Text>      
       </View>
      </TouchableWithoutFeedback> 
    );
}
const styles = StyleSheet.create({
    card:{
    backgroundColor:colors.white,
    borderRadius:15,
    marginBottom:20,
    
    

    },
    image:{
        width:"100%",
        height:200,
        borderTopStartRadius:15,
        borderTopEndRadius:15,

    },
    title:{
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:10,

    },
    subtitle:{
        paddingLeft:10,
        paddingBottom:20,
        color:colors.secondary,
        fontWeight:'bold',
    },
})
 
export default Card;