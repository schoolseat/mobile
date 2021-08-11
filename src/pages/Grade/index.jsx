import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/core';

import styles from './styles';
import colors from '../../styles/colors';
import { GradeCard, Loading } from '../../components';
import { useApi } from '../../hooks/auth';

export default function Grade() {
  const [isMural, setIsMural] = useState(true);
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState(false);

  const navigation = useNavigation();
  const { getDataById, loading } = useApi();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }

  const { data: grade } = route.params;

  async function getTeacherData() {
    const id = grade.teacher;
    if (loading) return;
    const data = await getDataById({ id, isUser: true })
    setTeacher(data);
  }

  useEffect(() => {
    getTeacherData();
  }, [])
  if (loading || !teacher) {
    return <Loading />;
  }
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
          teacher.profilePic
            ? <Image style={styles.teacherPfp} source={{ uri: teacher.profilePic }} />
            : <FontAwesome name="user-circle-o" size={24} color="black" style={styles.teacherPfp} />
        }
        <Text style={styles.teacherName}>
          {teacher.name}
        </Text>
      </View>
      <Text style={styles.schoolName}>
        {grade.school}
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
            <GradeCard
              data={item}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}
