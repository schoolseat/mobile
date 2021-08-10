/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Alert,
  Linking,
  Keyboard,
  Platform,
  TextInput,
  ScrollView,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import dayjs from 'dayjs';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome, Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';
import Img from '../../assets/loginimg.svg';
import { Button, FieldError } from '../../components';

const expression = /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]+([a-z]{2,10})$/;
const passwordVerifyer = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

const today = new Date();

export default function Welcome() {
  const [hide, setHide] = useState(true);
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [dateVerified, setDateVerified] = useState(false);
  const [nameVerified, setNameVerified] = useState(false);
  const [sendLoginChecker, setSendLoginChecker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    'insira a sua data de nascimento',
  );

  const navigation = useNavigation();
  const { postApiData } = useApi();

  function handlePassword() {
    setHide(!hide);
  }

  async function handleClassSelect() {
    const parsedPostData = {
      password: password,
      email: email,
      name: nameVerified,
      nickname: nameVerified,
      profilePic: image.uri,
      bornDate: dateVerified,
      bio: "Sem bio!"
    }
    await postApiData({ data: parsedPostData, isCreateAccount: true })
    navigation.navigate('Calendar');
  }

  function handleDatePicker() {
    setShowPicker(!showPicker);
    setDateVerified(true);
  }
  function alert(data) {
    Platform.OS === "ios"
        ? Alert.alert(data[0], data[1])
        : ToastAndroid.show(
            data[1],
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
}
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Preciso da permissão', 'Preciso dá permissão de gerenciar arquivos para que você escolha uma foto de perfil 😀');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Cadastro</Text>

            <Img
              width={Dimensions.get('window').width * 0.9}
              height={Dimensions.get('window').height * 0.4}
            />
            <View style={styles.views}>
              <Feather name="mail" size={24} style={styles.icons} color={colors.blue} />
              <TextInput
                style={styles.inputs}
                placeholder="insira o seu e-mail"
                onChangeText={
                  (text) => expression.test(String(text).toLowerCase())
                    ? setEmail(text)
                    : setEmail(false)
                }
              />
              {
                email
                  ? (
                    <FontAwesome
                      name="check-circle"
                      size={32}
                      color={colors.blue}
                      style={styles.lefticons}
                    />
                  )
                  : (
                    <FontAwesome
                      name="close"
                      size={32}
                      color={colors.red}
                      style={styles.lefticons}
                    />
                  )
              }
            </View>
            {
              sendLoginChecker
              && !verified
              && <FieldError error='Você precisa inserir o seu e-mail' />
            }
            <View style={styles.views}>
              <FontAwesome name="pencil-square-o" size={24} style={styles.icons} color={colors.blue} />
              <TextInput
                style={styles.inputs}
                placeholder="insira o seu nome"
                onChangeText={
                  (text) => text
                    ? setNameVerified(text)
                    : setNameVerified(false)
                }
              />
              {
                nameVerified
                  ? (
                    <FontAwesome
                      name="check-circle"
                      size={32}
                      color={colors.blue}
                      style={styles.lefticons}
                    />
                  )
                  : (
                    <FontAwesome
                      name="close"
                      size={32}
                      color={colors.red}
                      style={styles.lefticons}
                    />
                  )
              }
            </View>
            {
              sendLoginChecker
              && !nameVerified
              && <FieldError error='você precisa inserir o seu nome' />
            }
            <View style={styles.views}>
              <Feather name="lock" size={24} color={colors.blue} style={styles.icons} />
              <TextInput
                style={styles.inputs}
                secureTextEntry={hide}
                placeholder="insira uma senha com pelo menos 6 caracteres um numero e uma letra maiuscula"
                onChangeText={(text) => passwordVerifyer.test(text) ? setPassword(text) : setPassword(false)} />

              <TouchableOpacity onPress={() => handlePassword()}>
                {
                  hide
                    ? (
                      <Feather
                        name="eye"
                        size={24}
                        color="#A2A2A2"
                        style={styles.lefticons}
                      />
                    )
                    : (
                      <Feather
                        name="eye-off"
                        size={24}
                        color="#A2A2A2"
                        style={styles.lefticons}
                      />
                    )
                }
              </TouchableOpacity>
            </View>
            {
              sendLoginChecker
              && !password
              && <View style={styles.FieldError}>
                <FieldError error='Você precisa inserir uma senha com pelo menos 6 caracteres um numero e uma letra maiuscula' />
              </View>
            }
            <View style={styles.views}>
              <Feather name="calendar" size={24} color={colors.blue} style={styles.icons} />
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <TextInput style={styles.inputs} editable={false} placeholder={selectedDay} />
              </TouchableOpacity>
              {
                dateVerified
                  ? (
                    <FontAwesome
                      name="check-circle"
                      size={32}
                      color={colors.blue}
                      style={styles.lefticons}
                    />
                  )
                  : (
                    <FontAwesome
                      name="close"
                      size={32}
                      color={colors.red}
                      style={styles.lefticons}
                    />
                  )
              }
              {
                showPicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date(dayjs(today).format('YYYY-MM-DD'))}
                    mode="date"
                    is24Hour
                    display="default"
                    onChange={(event, data) => {
                      handleDatePicker();
                      setSelectedDay(dayjs(data).format('YYYY-MM-DD'));
                    }}
                    maximumDate={today}
                    minimumDate={new Date(1950, 1, 1)}
                  />
                )
              }
            </View>
            {
              sendLoginChecker
              && !dateVerified
              && <FieldError error='você precisa inserir uma senha' />
            }
            <View style={styles.views}>
              <Feather name="camera" size={24} color={colors.blue} style={styles.icons} />
              <TouchableOpacity onPress={pickImage}>
                <TextInput
                  style={styles.inputs}
                  editable={false}
                  placeholder={
                    image
                      ? 'Prontinho 😊'
                      : 'Uma foto sua'
                  }
                />

              </TouchableOpacity>
              {
                image
                  ? (
                    <FontAwesome
                      name="check-circle"
                      size={32}
                      color={colors.blue}
                      style={styles.lefticons}
                    />
                  )
                  : (
                    <FontAwesome
                      name="close"
                      size={32}
                      color={colors.red}
                      style={styles.lefticons}
                    />
                  )
              }
            </View>
            <View style={styles.button}>
              <Button name="Criar Conta" onPress={() => (email && password && dateVerified && nameVerified) ? handleClassSelect() : setSendLoginChecker(true)} />
            </View>
            <View style={styles.lowerView}>
              <Text style={styles.little}>
                Ao se cadastrar você concorda com os
                <Text
                  style={styles.thermsLink}
                  onPress={() => Linking.openURL('http://google.com')}
                >
                  Termos e Condições
                </Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
