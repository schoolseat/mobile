import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';
import book from '../../assets/book.png';
import { Button } from '../../components';
import styles from './styles';

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
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleStart}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>

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
