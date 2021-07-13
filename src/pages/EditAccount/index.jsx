import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TextInput,
} from 'react-native';
import styles from './styles';

import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import { useApi } from '../../hooks/auth';

import { Button, Loading } from '../../components';
import colors from '../../styles/colors';

export default function EditAccount() {
    const { user: data, loading } = useApi();
    const [user, setUser] = useState(false);

    async function fetchUser() {
        if (loading) return
        setUser(data)
    }

    const navigation = useNavigation();

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
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    <BorderlessButton onPress={handleGoBack}>
                        <Feather
                            name="arrow-left"
                            size={24}
                            color={colors.heading}
                        />
                    </BorderlessButton>
                    <Text style={styles.title}>Editar Perfil</Text>
                </View>
                <View style={styles.data}>
                    <Image style={styles.image} source={{ uri: user.profilePic }} />
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
        </ScrollView>
    );
}
