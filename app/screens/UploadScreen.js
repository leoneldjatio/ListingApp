import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import AppText from '../component/AppText';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import colors from '../config/colors';

function UploadScreen({onDone,progress=0, visible=false}) {
  return (
      <Modal visible={visible}>
    <View style={styles.container}>
      {progress < 1 ?
    (<Progress.Bar  Progress={progress} width={200} color={colors.primary} />) : (
    <LottieView
    autoPlay
    loop={false}
    source={require('../assets/animations/done.json')}
    style={styles.animation}
    onAnimationFinish={onDone}
    />)}
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems:"center",
      justifyContent:"center",
      flex:1,
  },
  animation:{
    width:150,
  }
});

export default UploadScreen;