/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { Loading, NotificationsCard } from '../../components';

export default function Notifications() {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const navigation = useNavigation();

  function handleNavigate(data) {
    navigation.navigate(data.name, data.params)
  }

  async function loadNotifications() {
    setNotifications(await AsyncStorage.getItem('@SchoolSeat/notifications'))
    if(!notifications) return setLoading(false);
  }
  useEffect(() => {
    loadNotifications();
  }, [notifications]);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Notificações</Text>
      </View>
      <View>
        <FlatList
          data={notifications}
          keyExtractor={(item) => String(item.title)}
          renderItem={({ item }) => (
            <NotificationsCard
              title={item.title}
              body={item.body}
              onPress={() => console.log(item.data.router)}
            />
          )}
        />
      </View>
    </View>
  );
}
