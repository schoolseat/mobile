/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
import React, { useState } from 'react';

import {
  Text,
  View,
  Image,
  Platform,
  Keyboard,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { FontAwesome, Feather } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';
import { Button } from '../../components';
import img from '../../assets/loginimg.png';

const expression = /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]+([a-z]{2,10})$/;

export default function Welcome() {
  const [hide, setHide] = useState(true);
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const { getApiData } = useApi();

  function handlePassword() {
    setHide(!hide);
  }

  const navigation = useNavigation();

  async function handleNavigate(place) {

    const login = { email, password };

     await getApiData({login});
     navigation.navigate(place);
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Faça Login</Text>

            <Image style={styles.image} source={img} />
            <View style={styles.views}>
              <Feather name="mail" size={24} style={styles.icons} color={colors.blue} />
              <TextInput
                style={styles.inputs}
                placeholder="insira o seu e-mail"
                type="email"
                onChangeText={
                  (text) => (expression.test(String(text).toLowerCase())
                    ? (
                      setVerified(true),
                      setEmail(text)
                      )
                    : setVerified(false)
                  )
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
            <View style={styles.views}>
              <Feather name="lock" size={24} color={colors.blue} style={styles.icons} />
              <TextInput 
              style={styles.inputs} 
              secureTextEntry={hide} 
              placeholder="insira a sua senha"
              onChangeText={ (text) => setPassword(text) }
              />

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

            <Text
              style={styles.forgotPass}
              onPress={() => handleNavigate('RecoverPassword')}
            >
              Esqueceu a senha ?
            </Text>
            <Text
              style={styles.forgotPass}
              onPress={() => handleNavigate('CreateAccount')}
            >
               Não é cadastrado ? {`\n`}
               Cadastre-se agora.
            </Text>
            <View style={styles.button}>
              <Button name="Logar" onPress={() => handleNavigate('Calendar')} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
