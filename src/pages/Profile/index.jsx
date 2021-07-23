import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';
import { Button, Loading, EditAccount, ModalView } from '../../components';

export default function profile() {
  const [openModal, setOpenModal] = useState(false);
  const { user, loading } = useApi();

  const navigation = useNavigation();

  function handleModal() {
    setOpenModal(!openModal);
  }
  function handleNavigation(place) {
    navigation.navigate(place);
  }
  function stars(total) {
      return (
        <View style={styles.stars}>
          <AntDesign name={total >= 1 ? "star" : "staro"} size={24} color={total >= 1 ? colors.yellow : colors.heading} />
          <AntDesign name={total >= 2 ? "star" : "staro"} size={24} color={total >= 2 ? colors.yellow : colors.heading} />
          <AntDesign name={total >= 3 ? "star" : "staro"} size={24} color={total >= 3 ? colors.yellow : colors.heading} />
          <AntDesign name={total >= 4 ? "star" : "staro"} size={24} color={total >= 4 ? colors.yellow : colors.heading} />
          <AntDesign name={total >= 5 ? "star" : "staro"} size={24} color={total == 5 ? colors.yellow : colors.heading} />
        </View>
      );
  }

  if (loading || !user) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: user.profilePic,
          }}
        />
        <View style={styles.headerTexts}>
            <Text style={styles.title}>{user.name}</Text>
            <View style={styles.data}>
              <Text style={styles.text}>{user.bio}</Text>
              {stars(Number(user.stars))}
            </View>
          <View style={styles.editprofile}>
            <Button name="Editar perfil" onPress={handleModal} />
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
      <Button name="Deslogar" onPress={() => handleNavigation('UserIdentification')} />
      <View style={styles.modal}>
        <ModalView visible={openModal} closeModal={handleModal}>
          <EditAccount user={user} handleModal={handleModal} />
        </ModalView>
      </View>
    </View>
  );
}
