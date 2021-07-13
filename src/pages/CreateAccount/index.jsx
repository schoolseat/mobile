/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import React, { useState, useEffect } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import * as ImagePicker from 'expo-image-picker';

import colors from '../../styles/colors';
import styles from './styles';
import { Button, FieldError } from '../../components';
import img from '../../assets/loginimg.png';

const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

const today = new Date();
import Moment from 'moment';
export default function Welcome() {
  const [hide, setHide] = useState(true);
  const [verified, setVerified] = useState(false);
  const [dateVerified, setDateVerified] = useState(false);
  const [nameVerified, setNameVerified] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [sendLoginChecker, setSendLoginChecker] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedDay, setSelectedDay] = useState(
    ' insira a sua data de nascimento',
  );


  function handlePassword() {
    setHide(!hide);
  }
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate('Calendar');
  }
  function handleDatePicker() {
    setShowPicker(!showPicker);
    setDateVerified(true);
  }
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Preciso dessa permissão!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Cadastro</Text>

            <Image style={styles.image} source={img} />
            <View style={styles.views}>
              <Feather name="mail" size={24} style={styles.icons} color={colors.blue} />
              <TextInput
                style={styles.inputs}
                placeholder="insira o seu e-mail"
                onChangeText={
                  (text) => expression.test(String(text).toLowerCase())
                    ? setVerified(text)
                    : setVerified(false)
                }
              />
              {
                verified
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
                && <FieldError error='Você precisa inserir o seu e-mail'/>
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
                && <FieldError error='você precisa inserir o seu nome'/>
              }
            <View style={styles.views}>
              <Feather name="lock" size={24} color={colors.blue} style={styles.icons} />
              <TextInput style={styles.inputs} secureTextEntry={hide} placeholder="insira a sua senha" />

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
                && !nameVerified 
                && <FieldError error='você precisa inserir uma senha'/>
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
                    value={new Date(Moment(today).format('YYYY-MM-DD'))}
                    mode="date"
                    is24Hour
                    display="default"
                    onChange={(event, data) => {
                      handleDatePicker();
                      setSelectedDay(Moment(data).format('YYYY-MM-DD'));
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
                && <FieldError error='você precisa inserir uma senha'/>
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
              <Button name="Criar Conta" onPress={() => (verified && dateVerified && nameVerified) ? handleStart() : setSendLoginChecker(true) } />
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
