import React, { useContext, useState } from 'react';
import { StyleSheet,Image, View} from 'react-native';

import authApi from '../api/auth';
import Screen from '../component/Screen';
import * as Yup from 'yup';
import { AppForm,AppFormField,SubmitButton} from '../component/forms';
import ErrorMessage from '../component/forms/ErrorMessage';
import useAuth from '../auth/useAuth';




function LoginScreen(props) {
    const validationSchema = Yup.object().shape({
  email:Yup.string().required().label("Email"),
  password:Yup.string().required().min(4).label("Password")

    });

    const {logIn} = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);
    const handleSubmit = async ({email,password})=>{
      
     const result = await authApi.login(email,password);
     if(!result.ok) return setLoginFailed(true);
      setLoginFailed(false); 
      logIn(result.data);
    }
    
    
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo}
            source={require("../assets/logo-red.png")}
            />
             
         <AppForm
         initialValues={{email:"",password:""}}
         onSubmit={handleSubmit}
         validationSchema={validationSchema}
         >
        <ErrorMessage error="Invalid email and/or password" visible={loginFailed}/>
         <AppFormField
         autoCapitalize="none"
         autoCorrect={false}
           keyboardType="email-address"
           textContentType="emailAddress"
           icon="email"
           name="email" 
           placeholder="Email"/>

         <AppFormField
         autoCapitalize="none"
         autoCorrect={false} 
          icon="lock" 
          name="password"
          onBlur={() => setFieldTouched("password")}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"/>

         <View style={{marginTop:10,}}> 
         <SubmitButton label="Login"/>
         </View>

        </AppForm>  
    </Screen> 
  );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20
        
    }
})

export default LoginScreen;