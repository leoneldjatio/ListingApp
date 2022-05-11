import React from 'react';
import { TextInput, View,StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList,ScrollView} from 'react-native';
import { useState } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';



function AppPicker({icon,width='100%',items,placeholder,selectedItem,onSelectItem,numberOfColumns=1,PickerItemComponent=PickerItem}) {
    const [modalVisible,setModalVisible] = useState(false);
    return (
        <>
       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}> 
       <View style={[styles.container,{width}]}>
           <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>
           {selectedItem?( <AppText style={styles.text}>{selectedItem.label}</AppText>):(
               <AppText style={styles.placeholder}>{placeholder}</AppText>
           )}
           
           <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
       </View>
     </TouchableWithoutFeedback>
     <Modal visible={modalVisible} animationType="slide">
         <Screen>
         <Button title="close" onPress={() => setModalVisible(false)}/>
         <FlatList
         numColumns={numberOfColumns}
        data={items}
        keyExtractor={item => item.value.toString()}
        renderItem={({item}) => <PickerItemComponent
        label={item.label}
        item={item}
        onPress={()=>{
            setModalVisible(false);
            onSelectItem(item);
        }}
        />}
        /> 
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
    
    },
   
    icon:{
        marginRight:10,
    },
    text:{
       flex:1, 
    },
    placeholder:{
     color:defaultStyles.colors.medium,
     flex:1,
    }
})

export default AppPicker;