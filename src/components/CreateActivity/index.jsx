import React, { useState } from 'react';
import {
    View,
    Text,
    Keyboard,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import Button from '../Button';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';

export default function CreateActivity({ isContent, classe, handleModal }) {
    const [texT, setText] = useState(false);
    const [Title, setTitle] = useState(false);
    const [Content, setContent] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [ActivityLink, setActivityLink] = useState(false);
    const [Deadline, setDeadline] = useState(false);
    
    const today = new Date();
    const { postApiData } = useApi();
    const navigation = useNavigation();

    const verifyLink = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

    async function handleClassSelect() {
        const parsedPostContentData = {
            title: Title,
            content: Content,
            text: texT,
            classe: classe,
        }
        const parsedPostLessonsData = {
            title: Title,
            content: Content,
            text: texT,
            classe: classe,
            deadline: Deadline,
            activityLink: ActivityLink
        }

        const { data } = await postApiData({ data: isContent ? parsedPostContentData : parsedPostLessonsData, path: isContent ? "content" : "lessons" })
        navigation.navigate('Activity', { data });
    }
    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>{isContent ? "Novo conteudo" : "Nova atividade"}</Text>
                        </View>
                        <View style={styles.data}>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Titulo
                                </Text>
                                <TextInput
                                    editable
                                    maxLength={15}
                                    numberOfLines={1}
                                    style={styles.textsinput}
                                    onChangeText={(text) => setTitle(text)}
                                />
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Sub titulo
                                </Text>
                                <TextInput
                                    editable
                                    maxLength={25}
                                    numberOfLines={1}
                                    style={styles.textsinput}
                                    onChangeText={(text) => setContent(text)}
                                />
                            </View>
                            <View style={styles.inputsView}>
                                <Text style={styles.texts}>
                                    Texto
                                </Text>
                                <TextInput
                                    editable
                                    maxLength={140}
                                    numberOfLines={1}
                                    style={styles.textsinput}
                                    onChangeText={(text) => setText(text)}
                                />
                            </View>
                            {
                                !isContent &&
                                <View style={styles.inputsView}>
                                    <Text style={styles.texts}>
                                        insira a data de entrega da atividade
                                    </Text>
                                    <TouchableOpacity onPress={() => setShowPicker(true)}>
                                        <TextInput
                                            editable={false}
                                            placeholder={Deadline ? Deadline : ''}
                                            style={styles.textsinput}
                                            placeholderTextColor={colors.white}
                                        />
                                    </TouchableOpacity>
                                </View>
                            }
                            {
                                !isContent &&
                                <View style={styles.inputsView}>
                                    <Text style={styles.texts}>
                                        Link da atividade !
                                    </Text>
                                    <TextInput
                                        editable
                                        maxLength={25}
                                        numberOfLines={1}
                                        style={styles.textsinput}
                                        onChangeText={
                                            (text) => {
                                                verifyLink.test(String(text).toLowerCase())
                                                    ? setActivityLink(text)
                                                    : setActivityLink(false)
                                            }}
                                    />
                                </View>
                            }
                            {
                                showPicker && (
                                    <DateTimePicker
                                        is24Hour
                                        mode="date"
                                        display="default"
                                        testID="dateTimePicker"
                                        maximumDate={new Date(today.getFullYear + 5, 1, 1)}
                                        minimumDate={new Date(today)}
                                        value={new Date(dayjs(today).format('YYYY-MM-DD'))}
                                        onChange={(event, data) => {
                                            setShowPicker(false);
                                            setDeadline(dayjs(data).format('YYYY-MM-DD'));
                                        }}
                                    />
                                )
                            }
                        </View>
                        <View style={styles.button}>
                            <Button name="Pronto" onPress={handleClassSelect} />
                            <Button name="Cancelar" color={colors.white} textColor={colors.title} onPress={handleModal} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
