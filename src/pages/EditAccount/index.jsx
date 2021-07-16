import React, { useState } from 'react';
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

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';
import { Button, Loading } from '../../components';

export default function EditAccount() {
    const { user: data, loading } = useApi();
    const [user, setUser] = useState(false);

    const navigation = useNavigation();

    async function fetchUser() {
        if (loading) return
        setUser(data)
    }

    function handleGoBack() {
        navigation.goBack();
    }
    useState(() => {
        fetchUser();
    })

    if (loading || !user) {
        return <Loading />
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.headerContent}>
                            <BorderlessButton style={styles.icon} onPress={handleGoBack}>
                                <Feather
                                    name="arrow-left"
                                    size={24}
                                    color={colors.heading}
                                    
                                />
                            </BorderlessButton>
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
                            <Button name="Pronto" onPress={handleGoBack} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
