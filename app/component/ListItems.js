import React from 'react';
import {StyleSheet,View,Image,Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import colors from '../config/colors';

function ListItems({title,subtitle,image,IconComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.lightGrey}
        onPress={onPress}>  
        <View style={styles.list}>
            {IconComponent} 
        {image && <Image style={styles.image} source={image}/>}
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subTitle}>{subtitle}</Text>}
        </View>
        
        
    </View>
    </TouchableHighlight>
    </Swipeable>
    );
}
const styles = StyleSheet.create({
    title:{
        fontWeight:"500",
        fontSize:17,
        paddingBottom:5,
        
        },
        subTitle:{
        fontSize:15,
        color:colors.grey,
        
        },
        image:{
        width:70,
        height:70,
        borderRadius:40,
       
        
        },
        list:{
        padding:15, 
        flexDirection:"row",  
        },
        container:{
         padding:2,
         marginLeft:10,
         justifyContent:"center",   
        }
})

export default ListItems;