import React, { useState } from 'react';
import {
    View,
    Text,
    Platform,
    Keyboard,
    TextInput,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

const expression = /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]+([a-z]{2,10})$/;

import styles from './styles'
import colors from '../../styles/colors';
import { Button } from '../../components';
import LoginImage from '../../assets/loginimg.svg';

export default function RecoverPassword() {
    const [verified, setVerified] = useState(false);

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <BorderlessButton style={styles.backButton} onPress={handleGoBack}>
                                <Feather
                                    size={24}
                                    name="arrow-left"
                                    color={colors.heading}
                                />
                            </BorderlessButton>
                            <Text style={styles.title}>Recupere a senha</Text>
                        </View>
                        <LoginImage
                            width={Dimensions.get('window').width * 0.9}
                            height={Dimensions.get('window').height * 0.4}
                        />
                        <View style={styles.views}>
                            <Feather name="mail" size={24} style={styles.icons} color={colors.blue} />
                            <TextInput
                                style={styles.inputs}
                                placeholder="insira o seu e-mail"
                                type="email"
                                onChangeText={
                                    (text) => (expression.test(String(text).toLowerCase())
                                        ? setVerified(true)
                                        : setVerified(false)
                                    )
                                }
                            />
                            {
                                verified
                                    ? (
                                        <FontAwesome
                                            size={32}
                                            name="check-circle"
                                            color={colors.blue}
                                            style={styles.lefticons}
                                        />
                                    )
                                    : (
                                        <FontAwesome
                                            size={32}
                                            name="close"
                                            color={colors.red}
                                            style={styles.lefticons}
                                        />
                                    )
                            }
                        </View>
                        <Button name="Enviar" onPress={handleGoBack} />
                        <Text style={styles.little}>
                            Um e-mail com o processo para {'\n'}
                            recuperação a senha será enviado
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}