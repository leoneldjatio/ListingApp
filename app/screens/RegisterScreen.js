import React,{useState} from 'react';
import * as Yup from 'yup';
import { View} from 'react-native';
import { AppForm, AppFormField } from '../component/forms';
import { SubmitButton } from '../component/forms';
import Screen from '../component/Screen';
import userApi from '../api/users';
import authApi from '../api/auth'
import ErrorMessage from '../component/forms/ErrorMessage';
import auth from '../auth/useAuth';
import useApi from '../Hooks/useApi';
import ActivityIndicator from '../component/ActivityIndicator';

function RegisterScreen(props) {
    const validationSchema = Yup.object().shape({
        name:Yup.string().required().label("Name"),
        email:Yup.string().required().label("Email"),
        password:Yup.string().required().min(4).label("Password") });

const registerApi= useApi(userApi.register);
const loginApi = useApi(authApi.login);
const [error, setError] = useState();
       const handleSubmit = async(values)=>{
        const result = await  registerApi.request(values);
        if(!result.ok){
          if(result.data){
            setError(result.data.error);
            
                  } 
          else{
          setError("An unexspected error occured.");
          console.log(result);
          }
           return; 
        }
        const {data} = await loginApi.request(
          values.email,
          values.password
        );   
        auth.logIn(data);
       };   
    return (
     <>
      <ActivityIndicator visible={registerApi.loading||loginApi.loading}/>
        <Screen style={{padding:10}}>
        <AppForm
         initialValues={{name:"",email:"",password:""}}
         onSubmit={handleSubmit}
         validationSchema ={validationSchema}
        >
          <ErrorMessage error={error} visible={setError}/>
            <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
              keyboardType="default"
              textContentType="name"
              icon="account"
              name="name" 
              placeholder="Name"/>

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
         <SubmitButton label="Register"/>
         </View>
        </AppForm>
        </Screen>
        </>     
    );
}

export default RegisterScreen;