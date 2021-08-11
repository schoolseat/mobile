import React from 'react';
import { StatusBar, View, Dimensions } from 'react-native'

import AnimatedLoader from 'react-native-animated-loader';

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
        animationStyle={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width * 1
        }}
        speed={2}
      />
    </View>
  );
}