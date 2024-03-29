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

  const { data } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="white-content"
        backgroundColor="transparent"
      />
      <BorderlessButton
        style={styles.backButton}
        onPress={handleStart}
      >
        <AntDesign
          size={30}
          color="white"
          name="arrowleft"
        />
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
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subTitle}>{data.content}</Text>
          </View>
          <View>
            <Text style={styles.text}>
              {data.text}
            </Text>
            {
              data.activityLink &&
              <Text>
                {data.activityLink}
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
