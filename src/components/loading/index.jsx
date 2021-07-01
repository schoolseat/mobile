import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import styles from './styles';
import lottie from '../../assets/loading.json';

export default function Loading() {
  return (
    <AnimatedLoader
      visible
      overlayColor="#4dc591"
      source={lottie}
      animationStyle={styles.lottie}
      speed={2}
    />
  );
}