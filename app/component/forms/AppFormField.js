import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

function AppFormField({name,width,...otherProps}) {
    const {setFieldValue, values,setFieldTouched,handleChange,errors,touched} = useFormikContext();
    return (
       <>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          {...otherProps}
          width={width}
          value={values[name]}
          onChangeText={text=> setFieldValue(name,text)}
          />

        <ErrorMessage error={errors[name]} visible={touched[name]}/> 
       </>
    );
}

export default AppFormField;