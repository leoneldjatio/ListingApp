import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import ListItems from '../component/ListItems';

function ListingDetailScreen(props) {
    return (
       <View>
           
           <Image style={styles.image} source={require("../assets/jacket.jpg")}/>
           <View style={styles.text}>
           <Text style={styles.title}>Red jacket for sale</Text>
           <Text style={styles.subTitle}>$100</Text>
           </View>
         
         <View style={styles.container}>
           <ListItems
           image={require("../assets/mosh.jpg")}
           title="Leonel Foma"
           subtitle="10 Listings"
            /></View>
       </View>
    );
}

const styles = StyleSheet.create({
    image:{
    width:"100%",
    height:300,
    padding:20,
    },
    text:{
    padding:20,
    },
    title:{
    fontSize:22,
    fontWeight:"500",
    paddingBottom:10,
    },
    subTitle:{
    color:colors.secondary,
    fontWeight:"600",
    },
    container:{
    padding:20,       
    }

})

export default ListingDetailScreen;