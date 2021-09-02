import React from 'react';
import { render } from 'react-dom';
import { FlatList, StyleSheet } from 'react-native';
import ListItemDeleteAction from '../component/ListItemDeleteAction';
import ListItems from '../component/ListItems';
import ListItemSeparator from '../component/ListItemSeparator';
import Screen from '../component/Screen';
import { useState } from 'react';
import colors from '../config/colors';

const initialMessages =[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/mosh.jpg'),
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/mosh.jpg'),
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message =>{
        setMessages( messages.filter(m=>m.id !== message.id));
        //delete the message from messages
    }
    return (
       <Screen>
           
           <FlatList style={styles.container}
           data={messages}
           keyExtractor={(message) => message.id.toString()}
           renderItem={({item}) => (<ListItems
           title={item.title}
           subtitle={item.description}
           image={item.image}
           onPress={() => console.log("message selected", item)}
           renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
           />
           )}
           ItemSeparatorComponent={ListItemSeparator}
           refreshing={refreshing}
           onRefresh={() => {
               setMessages([
                {
                    id:1,
                    title:'T1',
                    description:'D1',
                    image:require('../assets/mosh.jpg'),
                },
               ])
           }}
           
           />
       </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.white,
    },
});

export default MessagesScreen;