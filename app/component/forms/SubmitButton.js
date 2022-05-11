import React from 'react';
import AppButton from '../AppButton';
import {useFormikContext} from 'formik';

function SubmitButton({label}) {
    const {handleSubmit} = useFormikContext();
    return (
<AppButton title={label} onPress={handleSubmit}/>
    );
}

export default SubmitButton;