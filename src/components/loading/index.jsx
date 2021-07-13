import React from 'react';
import { StatusBar, View } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader';

import styles from './styles';
import lottie from '../../assets/loading.json';

export default function Loading() {
  return (
    <View>
      <StatusBar
        barStyle="white-content"
        backgroundColor="transparent"
        translucent
      />
      <AnimatedLoader
        visible
        overlayColor="#4dc591"
        source={lottie}
        animationStyle={styles.lottie}
        speed={2}
      />
    </View>
  );
}