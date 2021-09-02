import React from 'react';
import { TextInput, View,StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { useState } from 'react';


import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';


function AppPicker({icon,placeholder,...otherprops}) {
    const [modalVisible,setModalVisible] = useState(false);
    return (
        <>
       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}> 
       <View style={styles.container}>
           <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>
           <AppText style={styles.text}>{placeholder}</AppText>
           <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
       </View>
     </TouchableWithoutFeedback>
     <Modal visible={modalVisible} animationType="slide">
         <Screen>
         <Button title="close" onPress={() => setModalVisible(false)}/>
         </Screen>
     </Modal>
    </> 
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.lightGrey,
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10,
        width:'100%'
    },
   
    icon:{
        marginRight:10,
    },
    text:{
       flex:1, 
    }
})

export default AppPicker;