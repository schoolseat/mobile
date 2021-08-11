/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles';
import Book from '../../assets/book.svg';
import { useApi } from '../../hooks/auth';
import { LittleClassesCard, Loading } from '../../components';

export default function home() {
  const [classes, setClasses] = useState(false);

  const {
    classes: classesReq,
    getApiData,
    loading
  } = useApi();
  const navigation = useNavigation();

  async function fetchClasses() {
    getApiData();
    if (loading) return;
    setClasses(classesReq);
  }

  function handleClassSelect(data) {
    navigation.navigate('Grade', { data });
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
        <Book
          width={Dimensions.get('window').width * 0.9}
          height={Dimensions.get('window').height * 0.4}
        />
      </View>
      <ScrollView >
        <View style={styles.classes}>
          <Text style={styles.title}>
            Classes
          </Text>
          <FlatList
            data={classes}
            numColumns={2}
            renderItem={({ item }) => (
               <LittleClassesCard
                name={item.discipline}
                icon={item.icon}
                color={item.color}
                onPress={() => handleClassSelect(item)}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}