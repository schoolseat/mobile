import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';

import { useNavigation } from '@react-navigation/core'

import Styles from './styles'
import { MessagesCard, Loading } from '../../components';

export default function Messages() {
  const [isTeachers, setIsTeachers] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastMessage, setMessages] = useState(false);
  const navigation = useNavigation();

  async function fetchMessages() {
    let { data: messages } = await api.get(`messages?to=0`);

    if (!messages) return setLoading(true);

    const filtered = Array.from(
      new Set(messages.map(a => a.author.id))
    )
      .map(id => {
        return messages.find(a => a.author.id === id)
      })
    setMessages(filtered);
    setLoading(false);
  }
  function toggleTeacher() {
    setIsTeachers(!isTeachers)
  }
  function handleActivitySelect(data) {
    navigation.navigate('Messaging', { data })
  }
  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <View style={Styles.container}>
      <View style={Styles.toggle}>
        <Text onPress={() => toggleTeacher()} style={isTeachers ? Styles.toggleSelectedText : Styles.toggleText}>Professores</Text>
        <Text onPress={() => toggleTeacher()} style={isTeachers ? Styles.toggleText : Styles.toggleSelectedText}>Alunos</Text>
      </View>
      <ScrollView>
        <FlatList
          data={lastMessage}
          keyExtractor={item => String(item._id)}
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
      </ScrollView>

      <View style={Styles.button}>
        <TouchableOpacity>
          <AntDesign style={Styles.buttonIcon} name="adduser" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}