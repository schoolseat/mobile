/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';

import styles from './styles';

import { ActivitiesCard, Loading } from '../../components';

import book from '../../assets/book.png';

import { useApi } from '../../hooks/auth';

export default function home() {
  const [classes, setClasses] = useState(false);
  const {
    classes: classesReq,
    getApiData,
    loading
  } = useApi();

  const navigation = useNavigation();
  async function fetchClasses() {
    await getApiData()
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

      <View style={styles.image}>
        <Image style={styles.image} source={book} />
      </View>
      <ScrollView >
        <View style={styles.classes}>
          <Text style={styles.title}>
            Classes
          </Text>
          <FlatList
            data={classes}
            keyExtractor={(item) => String(item._id)}
            numColumns="2"
            renderItem={({ item }) => (
              <ActivitiesCard
                name={item.discipline}
                icon={item.icon}
                color={item.color}
                onPress={() => handleClassSelect(item)}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
