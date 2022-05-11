import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { Image } from 'react-native-expo-image-cache';
import ListItems from '../component/ListItems';

function ListingDetailScreen({route}) {
    const listing = route.params;
    return (
       <View>
           
           <Image style={styles.image} uri={{uri: listing.images[0].url}} tint='light' preview={{uri:listing.images[0].thumbnailUrl}}/>
           <View style={styles.text}>
           <Text style={styles.title}>{listing.title}</Text>
           <Text style={styles.subTitle}>${listing.price}</Text>
           </View>
         
         <View style={styles.container}>
           <ListItems
           image={require("../assets/mosh.jpg")}
           title="Leonel Foma"
           subtitle="10 Listings"
           showChevrons={false}
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