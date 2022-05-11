import React from 'react';
import {StyleSheet,View,Image,Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ListItems({title,subtitle,image,IconComponent,onPress,renderRightActions,showChevrons,route}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
       <TouchableHighlight 
        underlayColor={colors.lightGrey}
        onPress={onPress}>  
        <View style={styles.list}>
            {IconComponent} 
        {image && <Image style={styles.image} source={image}/>}
        <View style={styles.container}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        {subtitle && <Text numberOfLines={2} style={styles.subTitle}>{subtitle}</Text>}
        </View>
        
     {showChevrons? (<MaterialCommunityIcons style={{color:colors.medium,alignSelf:"center"}} name="chevron-right" size={25}/>):(<></>)}
        
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
         flex:1,
            
        }
})

export default ListItems;