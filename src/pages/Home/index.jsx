/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles';
import book from '../../assets/book.png';
import { useApi } from '../../hooks/auth';
import { ActivitiesCard, Loading } from '../../components';

export default function home() {
  const [classes, setClasses] = useState(false);

  const {
    classes: classesReq,
    getApiData,
    loading
  } = useApi();

  const navigation = useNavigation();

  async function fetchClasses() {
    if (loading) return;
    setClasses(classesReq);
  }

  function handleClassSelect(grade) {
    navigation.navigate('Grade', { grade });
  }

  useEffect(() => {
    fetchClasses();
  }, [classes, classesReq, loading]);

  if (loading || !classes) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="white-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.image}>
        <Image style={styles.image} source={book} />
      </View>
      <ScrollView >
        <View style={styles.classes}>
          <Text style={styles.title}>
            Classes
          </Text>
          <View style={styles.classesCards}>
            {
              Object.values(classes).map((item) => {
               return <ActivitiesCard
                  key={item._id}
                  name={item.discipline}
                  icon={item.icon}
                  color={item.color}
                  onPress={() => handleClassSelect(item)}
                />
              })
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}