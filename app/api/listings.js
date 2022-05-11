import axios, { Axios } from "axios";
import client from "./client";


const endpoint = "/listings";

const getListings = () => client.get(endpoint);



const uploadListings = ({values,location},onUploadProgress)=>{
   
        const data = new FormData();
        data.append('title',values.title);
        data.append('price',values.price);
        data.append('categoryId',values.category.value)
        data.append('description',values.description);
        if(location){
            data.append('location',JSON.stringify(location));  
                 }
        values.images.forEach(function(image){
         data.append('images',{
             name:Date.now().toString(36)+Math.random().toString(36).substr(2),
             type:'image/jpeg',
             uri:image,
         })
     }); 
     
      return client.post('/listings',data,{onUploadProgress:(progress)=>onUploadProgress(progress.loaded/progress.total)},);
     
  
       
}

export default{
    getListings,
    uploadListings,
}