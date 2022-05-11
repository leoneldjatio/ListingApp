import React from 'react';
import Screen from '../component/Screen';
import { FlatList,ImageComponent,StyleSheet, View } from 'react-native';
import ListItems from '../component/ListItems';
import colors from '../config/colors';
import MenuIcons from '../component/MenuIcons';
import ListItemSeparator from '../component/ListItemSeparator';
import useAuth from '../auth/useAuth';


const listDetails =[
    {
        id:1,
        title:'Leonel Foma',
        description:'leonelfoma@gmail.com',
        image:require('../assets/mosh.jpg'),
    }
]
const listIcons =[
    {
        id:1,
        title:'My Listings',
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary,
        },
        
        
    },
    {
        id:2,
        title:'My Messages',
        icon:{
            name:"email",
            backgroundColor:colors.secondary,
        },
        targetScreen:"Messages",
        
    },
]


function MyAccountScreen({navigation}) {
    const {user,logOut} = useAuth();
    
    return (
        <Screen style={styles.screen}>
          <View style={styles.container}>  
           <ListItems
           showChevrons={true}
           title={user.name}
           subtitle={user.email}
           image={require('../assets/mosh.jpg')} 
           />
          </View>
          <View style={styles.container1}> 
             <FlatList 
            data = {listIcons}
            keyExtractor = {(listIcons) => listIcons.id.toString()}
            renderItem = {({item}) => ( <ListItems

               title={item.title}
               onPress={()=>navigation.navigate(item.targetScreen) }
               showChevrons={true}
               IconComponent= {<MenuIcons
                name={item.icon.name}
                size={50}
                content="center"
                backgroundColor={item.icon.backgroundColor}
                color={colors.white}
                />}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            
            />
           </View> 
           <View style={styles.container}>
            <ListItems
            title="Log Out"
            onPress={()=>logOut()}
            showChevrons={true}
            IconComponent={<MenuIcons
            name="logout"
            size={50}
            backgroundColor={colors.yellow}
            content="center"
            color={colors.white}
            
            
            />}
            
            />
           </View>    
           
            
        </Screen>
                
        
    );
}
const styles = StyleSheet.create({
    container:{
    backgroundColor:colors.white,
    marginTop:20,
    marginBottom:30,
    
    
    },
    screen:{
        backgroundColor:colors.lightGrey
    },
    container1:{
        backgroundColor:colors.white,
        marginTop:20,
        
        },
});

export default MyAccountScreen;