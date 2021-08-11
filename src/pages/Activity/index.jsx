import React from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/core';

import styles from './styles';
import Book from '../../assets/book.svg';
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

      <View style={styles.image}>
        <Book
          width={Dimensions.get('window').width * 0.9}
          height={Dimensions.get('window').height * 0.4}
        />
      </View>
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
