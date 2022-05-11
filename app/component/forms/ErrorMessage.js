import React from 'react';
import {StyleSheet} from 'react-native'; 
import colors from '../../config/colors';
import AppText from '../AppText';


function ErrorMessage({error,visible}) {
    if (!visible || !error) return null;
    return (
<AppText style={styles.errors}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    errors:{
     color:colors.danger,
    }
})

export default ErrorMessage;