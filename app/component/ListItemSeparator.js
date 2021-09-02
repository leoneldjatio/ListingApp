import React from 'react';
import {View,StyleSheet} from 'react-native';
import colors from '../config/colors';

function ListItemSeparator() {
    return (
        <View style={styles.separate}>

        </View>
    );
}

const styles = StyleSheet.create({
    separate:{
        width:"100%",
        height:1,
        backgroundColor:colors.lightGrey,
    }
    
})

export default ListItemSeparator;