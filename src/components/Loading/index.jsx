import React from 'react';
import { StatusBar, View, Dimensions } from 'react-native'

import AnimatedLoader from 'react-native-animated-loader';

import lottie from '../../assets/loading.json';

export default function Loading() {
  return (
    <View>
      <StatusBar
        translucent
        barStyle="white-content"
        backgroundColor="transparent"
      />
      <AnimatedLoader
        visible
        speed={2}
        source={lottie}
        overlayColor="#4dc591"
        animationStyle={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width * 1
        }}
      />
    </View>
  );
}