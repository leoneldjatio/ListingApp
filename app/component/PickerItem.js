import React from 'react';
import { TouchableOpacity,StyleSheet,View} from 'react-native';
import AppText from './AppText';


function PickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>      
            <AppText style={styles.text}>
                {item.label}
             </AppText>  
            </View>    
            </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        padding:20,
        
    },
    container:{
        alignContent:"center",
        flexDirection:"column",
        flex:1,
    }
})

export default PickerItem;