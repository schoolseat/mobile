/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import {
  View,
  Text,
  Keyboard,
  Platform,
  TextInput,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles';
import { Button } from '../../components'
import { useApi } from '../../hooks/auth';
import Class_Stuck_at_Home_Monitor from '../../assets/Class-Stuck at Home Monitor.svg';

export default function Notifications() {
  const [className, setClassName] = useState(false);
  const [schoolName, setSchoolName] = useState(false);
  const [classBio, setClassBio] = useState(false);

  const navigation = useNavigation();
  const { postApiData, user } = useApi();

  async function handleClassSelect() {
    const parsedPostData = {
      icon: 'book',
      color: 'blue',
      bio: classBio,
      teacher: user.user,
      school: schoolName,
      discipline: className,
    }

    const { data } = await postApiData({ data: parsedPostData, path: "classes" })
    navigation.navigate('Grade', { data });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <FocusAwareStatusBar
            translucent
            barStyle="white-content"
            backgroundColor="transparent"
          />
          <View style={styles.greenContainer}>
            <Text style={styles.title}>Criar turma</Text>
            <Class_Stuck_at_Home_Monitor width={300} height={150} />
          </View>
          <View style={styles.data}>
            <Text style={styles.texts}>
              Nome da turma
            </Text>
            <TextInput
              editable
              maxLength={15}
              numberOfLines={1}
              style={styles.textsinput}
              onChangeText={(text) => setClassName(text)}
            />
            <Text style={styles.texts}>
              Nome da escola
            </Text>
            <TextInput
              editable
              maxLength={40}
              numberOfLines={1}
              style={styles.textsinput}
              onChangeText={(text) => setSchoolName(text)}
            />
            <Text style={styles.texts}>
              Bio da turma
            </Text>
            <TextInput
              editable
              maxLength={140}
              style={styles.textsinput}
              onChangeText={(text) => setClassBio(text)}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: 25 }}>
            <Button name="Entendido" onPress={handleClassSelect} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}