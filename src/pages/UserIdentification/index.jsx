/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import React, { useState } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';

import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import colors from '../../styles/colors';
import styles from './styles';
import { Button } from '../../components';
import img from '../../assets/loginimg.png';

const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;


export default function Welcome() {
  const [hide, setHide] = useState(true);
  const [verified, setVerified] = useState(false);

  function handlePassword() {
    setHide(!hide);
  }
  const navigation = useNavigation();
  function handleStart() {
    navigation.navigate('Calendar')
}
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Faça Login</Text>

            <Image style={styles.image} source={img} />
            <View style={styles.views}>
              <Feather name="mail" size={24} color={colors.blue} />
              <TextInput
                style={styles.inputs}
                placeholder="insira o seu e-mail"
                onChangeText={(text) => (expression.test(String(text).toLowerCase()) ? setVerified(true) : setVerified(false))}
              />
              {
                verified
                  ? (
                    <FontAwesome
                      name="check-circle"
                      size={32}
                      color={colors.blue}
                    />
                  )
                  : (
                    <FontAwesome
                      name="close"
                      size={32}
                      color={colors.red}
                    />
                  )
              }
            </View>
            <View style={styles.views}>
              <Feather name="lock" size={24} color={colors.blue} />
              <TextInput style={styles.inputs} secureTextEntry={hide} placeholder="insira a sua senha" />

              <TouchableOpacity onPress={() => handlePassword()}>
                {hide ? <Feather name="eye" size={24} color="#A2A2A2" /> : <Feather name="eye-off" size={24} color="#A2A2A2" />}
              </TouchableOpacity>
            </View>

            <Text style={styles.forgotPass} onPress={() => Linking.openURL('http://google.com')}>Esqueceu a senha?</Text>
            <Button name="Logar" onPress={() => handleStart()}/>

            <Text style={styles.little}>
              Não é cadastrado?
              <Text style={styles.logonLink} onPress={() => Linking.openURL('http://google.com')}>Cadastre-se agora.</Text>
            </Text>
            <Text style={styles.little}>
              Ao se cadastrar você concorda com os
              <Text style={styles.thermsLink} onPress={() => Linking.openURL('http://google.com')}>Termos e Condições</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
