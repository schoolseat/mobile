/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  Image,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { MessagingCard, Loading } from '../../components';

import styles from './styles';

import { useApi } from '../../hooks/auth';

export default function Messaging() {
  const [messages, setMessages] = useState(false);
  const [inputValues, setInputValues] = useState(false);
  const {
    messages: messagesReq,
    user,
    loading
  } = useApi();

  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  async function fetchMessages() {
    const messagesMap = new Map(messagesReq.map((classe) => [classe._id, classe]));

    const filteredLastMessage = [...new Set(user.messages)].reduce(
      (currentArray, classeId) => currentArray.concat(messagesMap.get(classeId) || []),
      [],
    );
    setMessages(filteredLastMessage);
  }

  function handleStart() {
    navigation.navigate('Calendar');
  }

  /*
  async function sendMessage(message) {
    const messageData = {
      _id: '6',
      user,
      to: messages[0].user.id,
      timestamp: Date.now(),
      content: message,
      reference: null,
    };
    await api.post('messages', messageData);
  }
  */
  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <TouchableOpacity style={styles.touchable} onPress={() => handleStart()}>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.name}>{data.author.name}</Text>
        {
          data.author.profilePic
            ? <Image style={styles.image} source={{ uri: data.author.profilePic }} />
            : <FontAwesome name="user-circle-o" style={styles.image} size={45} color="black" />
        }
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={messages}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item }) => (
            <MessagingCard
              key={item._id}
              text={item.content}
              hour="Date Fri Jun 18 2021 15:48:16 GMT-0300 (Brasilia Standard Time)"
              data={item}
              isMine={false}
              reply={item.reference}
            />
          )}
        />
      </ScrollView>
      <View style={styles.lowerView}>
        <TextInput
          style={styles.input}
          editable
          value={inputValues}
          onChangeText={(value) => {
            setInputValues(value);
          }}
          placeholder="Escreva uma mensagem"
        />
        {
        inputValues
          ? (
            <TouchableOpacity /* onPress={() => sendMessage(inputValues) } */>
              <FontAwesome name="send-o" style={styles.sendIconn} size={24} color="black" />
            </TouchableOpacity>
          )
          : (
            <View style={styles.iconsView}>
              <AntDesign style={styles.icons} name="paperclip" size={24} color="black" />
              <AntDesign style={styles.icons} name="camerao" size={24} color="black" />
              <MaterialCommunityIcons style={styles.icons} name="microphone-outline" size={24} color="black" />
            </View>
          )}
      </View>
    </View>
  );
}
