/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';

import Styles from './styles';
import { MessagesCard, Loading } from '../../components';

import { useApi } from '../../hooks/auth';

export default function Messages() {
  const [isTeachers, setIsTeachers] = useState(false);
  const [lastMessage, setMessages] = useState(false);
  const navigation = useNavigation();
  const {
    messages: messagesReq,
    getApiData,
    loading
  } = useApi();

  async function fetchMessages() {
    await getApiData();
    if (!messagesReq) return

    const filtered = Array.from(
      new Set(messagesReq.map((a) => a.author.id)),
    )
      .map((id) => messagesReq.find((a) => a.author.id === id));
    setMessages(filtered);
    return;
  }
  function toggleTeacher() {
    setIsTeachers(!isTeachers);
  }
  function handleActivitySelect(data) {
    navigation.navigate('Messaging', { data });
  }
  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.toggle}>
        <Text
          onPress={() => toggleTeacher()}
          style={
            isTeachers
              ? Styles.toggleSelectedText
              : Styles.toggleText
          }
        >
          Professores
        </Text>
        <Text
          onPress={() => toggleTeacher()}
          style={
            isTeachers
              ? Styles.toggleText
              : Styles.toggleSelectedText
          }
        >
          Alunos
        </Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={lastMessage}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item }) => (
            <MessagesCard
              name={item.author.name}
              key={item._id}
              lastContent={item.content}
              profilePic={item.profilePic}
              onPress={() => handleActivitySelect(item)}
            />
          )}
        />
      </SafeAreaView>

      <View style={Styles.button}>
        <TouchableOpacity>
          <AntDesign style={Styles.buttonIcon} name="adduser" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
