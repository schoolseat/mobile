import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/core';

import styles from './styles';
import book from '../../assets/book.png';
import { Button } from '../../components';

export default function Activity() {
  const navigation = useNavigation();
  const route = useRoute();
  function handleStart() {
    navigation.navigate('Calendar');
  }
  const { activity } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white-content"
        backgroundColor="transparent"
        translucent
      />
      <BorderlessButton
        style={styles.backButton}
        onPress={handleStart}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </BorderlessButton>

      <Image style={styles.image} source={book} />
      <ScrollView>
        <View style={styles.scrollContainer}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>{activity.title}</Text>
            <Text style={styles.subTitle}>{activity.content}</Text>
          </View>
          <View>
            <Text style={styles.text}>
              {activity.content}
            </Text>
            {
              activity.activityLink &&
              <Text>
                {activity.activityLink}
              </Text>
            }
          </View>
          <View style={styles.button}>
            <Button name="entendido" onPress={() => handleStart()} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
