import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/core';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { MessagesCard } from '../../components';
import api from '../../services/api';
import colors from '../../styles/colors';
import styles from './styles';

export default function Grade() {
  const [isMural, setIsMural] = useState(true);
  const [students, setStudents] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }
  const { grade } = route.params;

  async function classData() {
    const { data: user } = await api.get('users');

    const classesMap = new Map(user.map((users) => [users.id, users]));

    const filteredUsers = [...new Set(grade.users)].reduce(
      (currentArray, classeId) => currentArray.concat(classesMap.get(classeId) || []),
      [],
    );
    return setStudents(filteredUsers);
  }
  useEffect(() => {
    classData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <BorderlessButton onPress={handleGoBack}>
          <Feather
            name="arrow-left"
            size={24}
            color={colors.heading}
          />
        </BorderlessButton>

        <Text style={styles.title}>{grade.discipline}</Text>
      </View>
      <View style={styles.teacherView}>
        {
            grade.teacher.profilePic
              ? <Image style={styles.teacherPfp} source={{ uri: grade.teacher.profilePic }} />
              : <FontAwesome name="user-circle-o" size={24} color="black" style={styles.teacherPfp} />
                }
        <Text style={styles.teacherName}>
          {grade.teacher.name}
        </Text>
      </View>
      <Text style={styles.schoolName}>
        {grade.school.name}
      </Text>
      <View style={styles.buttons}>
        <Text
          onPress={() => setIsMural(true)}
          style={isMural ? styles.selectedText : styles.text}
        >
          Mural
        </Text>
        <Text
          onPress={() => setIsMural(false)}
          style={isMural ? styles.text : styles.selectedText}
        >
          Alunos
        </Text>
      </View>
      <ScrollView>
        <FlatList
          data={isMural ? [] : students}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MessagesCard
              name={item.name}
              profilePic={item.profilePic}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}
