import React from 'react';
import  {useEffect} from 'react';
import { View, StyleSheet,Image ,TouchableWithoutFeedback,Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';
import Screen from './Screen';

function ImageInput({imageUri,onChangeImage}) {

    handlePress= () =>{
        if(!imageUri == true){ 
            pickerResult();
        }
        else{
         Alert.alert(
             "Delete",
             "Are you sure you want to delete this image?",
             [{text:"Cancel"},{text:"Yes",onPress:()=>onChangeImage(null)}]
         );
        }
    }
        const pickerResult = async ()  => { 
            try {
              const result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  quality:0.5
              });
              if(!result.cancelled){
                onChangeImage(result.uri);
              }
            }
            catch (error) {
              console.log('Eror reading an image',error);
            }}; 

            const requestPermission = async () =>{
                const result =  ImagePicker.requestMediaLibraryPermissionsAsync();
                if(result.granted == false){
                alert('Please enable permission');
                return;
                }}
            
              useEffect( () => {
                 requestPermission();
              },[])     
    
  return (
     
    <TouchableWithoutFeedback onPress={handlePress}>     
    <View style={styles.container}>
    {onChangeImage} 
     {imageUri ?(<Image source={{uri: imageUri}} style={styles.image}/>):  (<MaterialCommunityIcons color={colors.medium}  style={styles.icon} name="camera" size={50}/>)}
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:colors.lightGrey,
      borderRadius:15,
      width:100,
      height:100,
      marginLeft:10,
      justifyContent:"center",
  },
  icon:{
  alignSelf:"center"
  },
  image:{
      height:'100%',
      width:'100%',
      borderRadius:15,
  }
});

export default ImageInput;