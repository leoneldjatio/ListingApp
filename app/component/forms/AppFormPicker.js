import React from 'react';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';


function AppFormPicker({name,items,placeholder,width,numberOfColumns,PickerItemComponent}) {
    const {touched,setFieldValue,values,errors} = useFormikContext();

    return (
        <>
         <AppPicker
         items={items}
         numberOfColumns={numberOfColumns}
         width={width}
         PickerItemComponent={PickerItemComponent}
         onSelectItem ={(item) => setFieldValue(name,item)}
         placeholder={placeholder}
         selectedItem={values[name]}
         /> 
         <ErrorMessage error={errors[name]} visible={touched[name]}/>  
        </>
    );
}

export default AppFormPicker;