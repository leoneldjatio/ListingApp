import React from 'react';
import AppText from './AppText';
import   Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Netinfo,{useNetInfo} from '@react-native-community/netinfo';

function OfflineNotice() {
    const networkStatus = useNetInfo();
    
    if (networkStatus.type !=="unknown" && networkStatus.isInternetReachable === false)
  return (
      <View style={styles.container}>
       <AppText style={styles.text}> No Internet Connection</AppText>
      </View>
    
  );

  return null;
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:colors.primary,
        height:50,
        width:"100%",
        position:"absolute",
        color:colors.white,
        justifyContent:"center",
        top:Constants.statusBarHeight,
        zIndex:1,

    },
    text:{
        color:colors.white,
    }
});

export default OfflineNotice;