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
import { GradeCard, Loading, ModalView, Button } from '../../components';
import { useApi } from '../../hooks/auth';

export default function Grade() {
  const [isMural, setIsMural] = useState(true);
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [halfModal, setHalfModal] = useState(false);

  const navigation = useNavigation();
  const { getDataById, loading } = useApi();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }
  function handleModal() {
    setOpenModal(!openModal);
    setHalfModal(!halfModal);
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

        <BorderlessButton onPress={handleModal}>
          <Text style={styles.dots}>...</Text>
        </BorderlessButton>
      </View>
      <View style={styles.headerDataView}>
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
      </View>
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
      {
        !isMural &&
        <FlatList
          data={grade.users}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GradeCard
              data={item}
            />
          )}
        />
      }
      <ModalView visible={openModal} closeModal={handleModal} half={halfModal} marginOfTop={0.59}>
        <View style={styles.modalButtons}>
          <Button name="Criar nova atividade" />
          <Button name="Criar novo conteudo" />
          <Button name="Editar turma" color='white' textColor='black' />
          <Button name="Apagar turma" color='red' />
        </View>
      </ModalView>
    </View>
  );
}
