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
      discipline: className,
      bio: classBio,
      school: schoolName,
      teacher: user.user,
      icon: 'book',
      color: 'blue',
    }

    const { data } = await postApiData({ data: parsedPostData, isClasses: true })
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
            barStyle="white-content"
            backgroundColor="transparent"
            translucent
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
              style={styles.textsinput}
              onChangeText={(text) => setClassName(text)}
              numberOfLines={1}
              editable
            />
            <Text style={styles.texts}>
              Nome da escola
            </Text>
            <TextInput
              style={styles.textsinput}
              onChangeText={(text) => setSchoolName(text)}
              numberOfLines={1}
              editable
            />
            <Text style={styles.texts}>
              Bio da turma
            </Text>
            <TextInput
              style={styles.textsinput}
              onChangeText={(text) => setClassBio(text)}
              numberOfLines={1}
              editable
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