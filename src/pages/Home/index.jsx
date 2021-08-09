/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles';
import Book from '../../assets/book.svg';
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
    getApiData();
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