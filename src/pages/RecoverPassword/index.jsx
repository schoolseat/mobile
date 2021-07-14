import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Keyboard,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';


import { useNavigation } from '@react-navigation/core';
import { FontAwesome, Feather } from '@expo/vector-icons';

import img from '../../assets/loginimg.png';

const expression = /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]+([a-z]{2,10})$/;

import styles from './styles'
import colors from '../../styles/colors';
import { Button } from '../../components';

export default function RecoverPassword() {
    const [verified, setVerified] = useState(false);

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification');
    }

    return (
        <View style={styles.container}> 
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Recupere a senha</Text>
                        <Image style={styles.image} source={img} />
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
                        <Button name="Enviar" onPress={handleStart} />
                        <Text style={styles.little}>
                            Um e-mail com o processo para {'\n'}
                            recuperação a senha será enviado
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
}