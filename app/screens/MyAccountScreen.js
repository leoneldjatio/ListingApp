import React from 'react';
import Screen from '../component/Screen';
import { FlatList,ImageComponent,StyleSheet, View } from 'react-native';
import ListItems from '../component/ListItems';
import colors from '../config/colors';
import MenuIcons from '../component/MenuIcons';
import ListItemSeparator from '../component/ListItemSeparator';


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
        }
        
    },
    {
        id:2,
        title:'My Messages',
        icon:{
            name:"email",
            backgroundColor:colors.secondary,
        }
        
    },
]
function MyAccountScreen(props) {
    return (
        <Screen style={styles.screen}>
          <View style={styles.container}>  
           <ListItems
           title="Leonel Foma"
           subtitle="leonelfoma@gmail.com"
           image={require('../assets/mosh.jpg')} 
           />
          </View>
          <View style={styles.container1}> 
             <FlatList 
            data = {listIcons}
            keyExtractor = {(listIcons) => listIcons.id.toString()}
            renderItem = {({item}) => ( <ListItems

               title={item.title}
               IconComponent= {<MenuIcons
                name={item.icon.name}
                size={50}
                content="center"
                backColor={item.icon.backgroundColor}
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
            IconComponent={<MenuIcons
            name="logout"
            size={50}
            backColor={colors.yellow}
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