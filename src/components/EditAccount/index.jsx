import React from 'react';
import {
    View,
    Text,
    Image,
    Keyboard,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';

import Button from '../Button';
import colors from '../../styles/colors';

export default function EditAccount({ user, handleModal }) {
    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>Editar Conta</Text>
                            </View>
                        <View style={styles.data}>
                            <Text style={styles.titles}>
                                Editar o e-mail da sua conta
                            </Text>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    E-mail
                                </Text>
                                <TextInput
                                    style={styles.textsinput}
                                    value={user.email}
                                    numberOfLines={1}
                                    editable
                                />
                                <Text style={styles.texts}>
                                    Ao editar o e-mail uma verificação será enviada para o novo e-mail
                                </Text>
                            </View>
                            <Text style={styles.titles}>
                                    Editar a senha
                                </Text>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Senha atual
                                </Text>
                                <TextInput
                                    value='****'
                                    style={styles.textsinput}
                                    numberOfLines={1}
                                    editable
                                />
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Nova senha
                                </Text>
                                <TextInput
                                    value='****'
                                    style={styles.textsinput}
                                    numberOfLines={1}
                                    editable
                                />
                            </View>
                        </View>
                        <View style={styles.button}>
                            <Button name="Pronto" onPress={handleModal} />
                            <Button name="Cancelar" color={colors.white} textColor={colors.title} onPress={handleModal} />
                            <Button name="Deletar conta" color={colors.red} onPress={handleModal} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
