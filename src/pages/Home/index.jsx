import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView
} from 'react-native';

import api from '../../services/api';

import styles from './styles';

import { ActivitiesCard, Loading } from '../../components';

import book from '../../assets/book.png';

export default function home() {
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState(false);

  async function fetchClasses() {
    const { data } = await api
      .get(`classes`)

    if (!data) return setLoading(true)
    setClasses(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchClasses();
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.image} source={book} />
      </View>
      <ScrollView>
        <View style={styles.classes}>
          <Text style={styles.title}>
            Materias
            </Text>
          <FlatList
            data={classes}
            keyExtractor={item => String(item._id)}
            numColumns='2'
            renderItem={({ item }) => (
              <ActivitiesCard
                name={item.discipline}
                icon={item.icon}
                color={item.color}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}