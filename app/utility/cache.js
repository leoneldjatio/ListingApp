import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment';

const expiredTime = 5;

const isExpired = (item) =>{
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp());
    return now.diff(storedTime,'minutes') > expiredTime;
}

const storeDataInCache = async (key,value) =>{

    const item = {
        value,
        timestamp:Date.now()
    }
    try {
        await AsyncStorage.setItem(cache + key,JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
    
}

const getDataFromCache = async (key) =>{
    try {
   const value =  await AsyncStorage.getItem(cache + key);
    const item = JSON.parse(value);
    if (!item) return null;

    if(isExpired(item)){
        await  AsyncStorage.removeItem(cache + key);
        return null;
     } 

     return item.value;

    } catch (error) {
        console.log(error)
    }
}


export default{
    storeDataInCache,
    getDataFromCache
}