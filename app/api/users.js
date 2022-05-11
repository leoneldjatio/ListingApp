import client from "./client";

const register =(values)=>{
    
    return client.post('/users',values);
  }

  export default{
  register
  };