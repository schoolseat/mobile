import React from 'react';
import styles from './styles';
import AnimatedLoader from "react-native-animated-loader";
import lottie from '../../assets/loading.json';

export default function Loading() {
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="#4dc591"
        source={lottie}
        animationStyle={styles.lottie}
        speed={2}
      />
    );
}