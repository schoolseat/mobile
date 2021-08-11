import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';

import {
  Button,
  Loading,
  ModalView,
  EditAccount,
  ClassesCard,
  EditProfile,
} from '../../components';

export default function profile() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [openEditAccount, setOpenEditAccount] = useState(false);
  const [halfModal, setHalfModal] = useState(false);
  const { user: Data, classes, loading } = useApi();
  const user = Data.user;

  const navigation = useNavigation();

  function handleModal() {
    setOpenModal(!openModal);
    setHalfModal(!halfModal);
  }
  function handleNavigation(place) {
    navigation.navigate(place);
  }
  function handleClassSelect(data) {
    navigation.navigate('Grade', { data });
  }
  function stars(total) {
    return (
      <View style={styles.stars}>
        <AntDesign name={total >= 1 ? "star" : "staro"} size={20} color={total >= 1 ? colors.yellow : colors.heading} />
        <AntDesign name={total >= 2 ? "star" : "staro"} size={20} color={total >= 2 ? colors.yellow : colors.heading} />
        <AntDesign name={total >= 3 ? "star" : "staro"} size={20} color={total >= 3 ? colors.yellow : colors.heading} />
        <AntDesign name={total >= 4 ? "star" : "staro"} size={20} color={total >= 4 ? colors.yellow : colors.heading} />
        <AntDesign name={total >= 5 ? "star" : "staro"} size={20} color={total == 5 ? colors.yellow : colors.heading} />
      </View>
    );
  }

  if (loading || !user) {
    return <Loading />;
  }
  return (

    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: user.profilePic,
            }}
          />
          <View style={styles.headerTexts}>
            <View>
              <Text style={styles.title}>{user.name}</Text>
              <View style={styles.data}>
                <Text style={styles.text}>{user.bio}</Text>
                {stars(Number(user.stars))}
              </View>
            </View>
            <View style={styles.editprofile}>
              <TouchableOpacity onPress={handleModal}>
                <Text style={styles.dots}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.level}>
          <Text style={styles.text}>
            Nivel:{' '}
            {user.level}
          </Text>
          <View style={styles.levelTexts}>
            <Text style={styles.text}>Experiencia atual</Text>
            <Text style={styles.userXp}>
              {user.xp}
              {' '}
              XP
            </Text>
          </View>
          <ProgressBar style={styles.progressbar} progress={user.xp / 1000} color="#6DA7F6" />
          <Text style={styles.remainXp}>100.000 xp</Text>
        </View>
        <View style={styles.classesView}>
          <Text style={styles.classesTitle}>Minhas turmas</Text>
          <FlatList
            data={classes}
            renderItem={({ item }) => (
              <ClassesCard
                data={item}
                isTeacher={item.teacher === user._id ? true : false}
                onPress={() => handleClassSelect(item)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView >
      <View style={styles.modal}>
        <ModalView visible={openModal} closeModal={handleModal} half={halfModal}>
          {
            (!openEditAccount && !openEditProfile) &&
            <View style={styles.modalButtons}>
              <Button name="Editar Perfil" onPress={() => {
                setOpenEditProfile(!openEditProfile),
                  setHalfModal(!halfModal);
              }}
              />
              <Button name="Editar Conta" onPress={() => {
                setOpenEditAccount(!openEditAccount),
                  setHalfModal(!halfModal);
              }}
              />
              <Button name="Sair" color={colors.red} onPress={() => handleNavigation('UserIdentification')} />
            </View>
          }
          {
            openEditAccount &&
            <EditAccount user={user} handleModal={handleModal} />
          }
          {
            openEditProfile &&
            <EditProfile user={user} handleModal={handleModal} />
          }
        </ModalView>
      </View>
    </View>
  );
}
