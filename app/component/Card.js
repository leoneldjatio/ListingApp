import React from 'react';
import { View,Text, StyleSheet,Image} from 'react-native';

import colors from '../config/colors';

function Card({title,subtitle,image}) {
    return (
       <View style={styles.card}>
           <Image style={styles.image} source={image}/>
           <Text style={styles.title}>{title}</Text>
           <Text style={styles.subtitle}>{subtitle}</Text>      
       </View>
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