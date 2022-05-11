
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { View,StyleSheet} from 'react-native';
import { AppForm, AppFormField } from '../component/forms';
import { SubmitButton } from '../component/forms';
import AppFormPicker from '../component/forms/AppFormPicker';
import Screen from '../component/Screen';
import CategoryPickerItem from '../component/CategoryPickerItem';
import FormImagePicker from '../component/FormImagePicker';
import * as Location from 'expo-location';
import useLocation from '../Hooks/useLocation';
import listings from '../api/listings';
import UploadScreen from './UploadScreen';



const validationSchema = Yup.object().shape({
    title:Yup.string().min(1).required().label("Title"),
    price:Yup.number().min(1).max(10000).required().label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category"),
    images:Yup.array().min(1,"Please select at least 1 image")
  
      });

      

const categories=[
{label:"Furniture",value:1,icon:"floor-lamp",bgcolor:"#fc5c65"},
{label:"Cars",value:2,icon:"car",bgcolor:"#fd9644"},
{label:"Camera",value:3,icon:"camera",bgcolor:"#fed330"},
{label:"Games",value:4,icon:"cards",bgcolor:"#26de81"},
{label:"Clothing",value:5,icon:"shoe-heel",bgcolor:"#2bcbba"},
{label:"Sports",value:6,icon:"basketball",bgcolor:"#45aaf2"},
{label:"Movies & Music",value:7,icon:"headphones",bgcolor:"#4b7bec"},
{label:"Books",value:8,icon:"book",bgcolor:"#51414F"},
{label:"Others",value:9,icon:"calendar",bgcolor:"#800080"}
] 

function ListingEditScreen() {

  const location = useLocation();
  const [uploadVisible,setUploadVisible] =useState(false);
  const [progress,setProgress] =useState(0);

  const handleSubmit = async (values,{resetForm}) =>{
    setProgress(0);
    setUploadVisible(true);
    const result = await listings.uploadListings({values,location},(progress)=>setProgress(progress));
    
       if(!result.ok){
         setUploadVisible(false);
          alert('Could not save listing.');
          return; 
       }
    
  resetForm();
};

   
    return (
        <Screen style={{padding:10}}>
          <UploadScreen onDone={()=>setUploadVisible(false)}  progress={progress} visible={uploadVisible}/>
        <AppForm
         initialValues={{price:"",title:"",description:"",category:null,images:[] }}
         onSubmit={handleSubmit}
         validationSchema ={validationSchema}
        >
          <FormImagePicker name="images"/>
            <AppFormField
            maxLength={255}
              keyboardType="default"
              name="title" 
              placeholder="Title"/>

         <AppFormField
         maxLength={8}
           keyboardType="numeric"
           textContentType="none"
           name="price"
           width={120} 
           placeholder="Price"/>

        <AppFormPicker
        items={categories}
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        name="category"
        width='50%'
        placeholder="Category"
        />   

        <AppFormField
           multiline
           numberOfLines={3}
           keyboardType="default"
           name="description" 
           placeholder="Description"/>

        <View style={{marginTop:10,}}> 
         <SubmitButton  label="Post"/>
         </View>
        </AppForm>
        </Screen>    
    );
}

export default ListingEditScreen;