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

import Button from '../button';
import colors from '../../styles/colors';

export default function EditAccount({ user, handleModal }) {
    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.headerContent}>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>Editar Perfil</Text>
                            </View>
                        </View>
                        <View style={styles.data}>
                            <View style={styles.image}>
                                <Image style={styles.profilePic} source={{ uri: user.profilePic }} />
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Nome
                                </Text>
                                <TextInput
                                    style={styles.textsinput}
                                    value={user.name}
                                    numberOfLines={1}
                                    editable
                                />
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Apelido
                                </Text>
                                <TextInput
                                    value={user.nickname}
                                    style={styles.textsinput}
                                    numberOfLines={1}
                                    editable
                                />
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Bio
                                </Text>
                                <TextInput
                                    value={user.bio}
                                    style={styles.textsinput}
                                    editable
                                    multiline={true}
                                    maxLength={190}
                                />
                            </View>
                        </View>
                        <View style={styles.button}>
                            <Button name="Pronto" onPress={handleModal} />
                            <Button name="Cancelar" color={colors.white} textColor={colors.title} onPress={handleModal} />
                            <Button name="Sair" color={colors.red} onPress={handleModal} />
                            <Button name="Deletar conta" color={colors.red} onPress={handleModal} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
