import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Card from '../component/Card';
import Screen from '../component/Screen';
import colors from '../config/colors';

const Listings =[ 
    {
    id:1,
    title:"Red jacket for sale",
    price:"100",
    image:require('../assets/jacket.jpg'),
},
{
    id:2,
    title:"Couch in great condition",
    price:"1000",
    image:require('../assets/couch.jpg'),
}
]
function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
           <FlatList
           data={Listings}
           keyExtractor={(Listings) => Listings.id.toString()}
           renderItem={({item})=> <Card
           title={item.title}
           subtitle={"$"+item.price}
           image={item.image}
           
           
           />}
           
           />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.lightGrey,
        padding:20,
    },
})

export default ListingScreen;