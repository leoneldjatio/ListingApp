import React from 'react';
import { StyleSheet, ImageBackground,View,Image,Text} from 'react-native';

import colors from '../config/colors';
import AppButton from '../component/AppButton';

const image = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");
function WelcomeScreen({navigation}) {
    return (
        <ImageBackground source={image} blurRadius={10} style={styles.background}>

        <View style={styles.logoContainer}>    
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.tagline}>Sell What You Don't Need</Text> 
        </View>

        <View style={styles.buttonContainer}><AppButton  onPress={()=>navigation.navigate("Login")} title="LOGIN" />
        <AppButton onPress={()=> navigation.navigate("Register")} color="secondary"  title="REGISTER"/>
        </View>  
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
     flex:1,
     justifyContent:"flex-end",
     alignItems:"center",
    },
    
    logo:{
    width:100,
    height:100,
    },

    logoContainer:{
    position:"absolute",
    top:70,
    alignItems:"center",
    
    },  
    buttonContainer:{
    width:"100%",
    padding:15,
    }, 
    tagline:{
    fontWeight:"600",
    fontSize:20,
    paddingVertical:10,
    },
})
export default WelcomeScreen;