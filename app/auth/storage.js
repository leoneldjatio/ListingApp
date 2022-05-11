import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';


const key = "authToken";

const storeToken = async authToken =>{
    try {
        await SecureStore.setItemAsync(key,authToken);
    } catch (error) {
        console.log("An error occured could not save token",error)
    }   
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);  
    } catch (error) {
        console.log("An error occured could not get auth token",error) 
    }
    
}

const getUser = async () =>{
    const token = await getToken();
    return(token) ? jwtDecode(token):null;
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);  
    } catch (error) {
        console.log("An error occured could not remove auth token",error) 
    }
}

export default {getToken,getUser, storeToken,removeToken};