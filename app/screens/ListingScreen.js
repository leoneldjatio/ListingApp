import React, { useEffect, useState } from 'react';
import {FlatList,StyleSheet} from 'react-native';
import Card from '../component/Card';
import Screen from '../component/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../component/AppText';
import AppButton from '../component/AppButton';
import ActivityIndicator from '../component/ActivityIndicator';
import useApi from '../Hooks/useApi';





function ListingScreen({navigation}) {
    const getListingsApi = useApi(listingsApi.getListings);
    

    useEffect(()=> {
        getListingsApi.request(1,2,3);
    },[]);
   
    
    return (
        <>
        <ActivityIndicator visible={getListingsApi.loading}/>
        <Screen style={styles.screen}>
            {getListingsApi.error &&<> 
            <AppText > Sorry we couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
            </>}

           
           <FlatList
          
           data={getListingsApi.data}
           keyExtractor={(listing) => listing.id.toString()}
           renderItem={({item})=>
           <Card
           title={item.title}
           onPress={()=>navigation.navigate(routes.LISTING_DETAILS,item)}
           subtitle={"$"+item.price}
           imageUrl={item.images[0].url}
           thumbnailUrl={item.images[0].thumbnailUrl}
           /> }
           
           />
          
        </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.lightGrey,
        padding:20,
    },
   
})

export default ListingScreen;