import React, { useState, useEffect } from 'react';
import {
    Image,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core'
import { AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import EmojiSelector from 'react-native-emoji-selector'
import { MessagingCard, Loading } from '../../components';

import api from '../../services/api';
import styles from './styles';
export default function Messaging() {
    const [showEmojiPicker, setshowEmojiPicker] = useState(false);
    const [messages, setMessages] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const { data } = route.params;

    async function fetchMessages() {
        let { data: user } = await api.get(`users?id=${data.author.id}`);
        let { data: messages } = await api.get(`messages`);

        if (!user || !messages) return setLoading(true);

        const myUser = user[0];
        const messagesMap = new Map(messages.map(classe => [classe._id, classe]));

        const filteredLastMessage = [...new Set(myUser.messages)].reduce(
            (currentArray, classeId) =>
                currentArray.concat(messagesMap.get(classeId) || []),
            [],
        );
        setMessages(filteredLastMessage);
        setLoading(false);
    }
    function handleStart() {
        navigation.navigate('Calendar')
    }
    function showPicker() {
        setshowEmojiPicker(!showEmojiPicker)
    }
    useEffect(() => {
        fetchMessages();
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity style={styles.touchable} onPress={() => handleStart()}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.name}>{data.author.name}</Text>
                {
                    data.author.profilePic ?
                        <Image style={styles.image} source={{ uri: data.author.profilePic }} /> :
                        <FontAwesome name="user-circle-o" style={styles.image} size={45} color='black' />
                }
            </View>
            <ScrollView style={styles.scrollView}>
                <FlatList
                    data={messages}
                    keyExtractor={item => String(item._id)}
                    renderItem={({ item }) => (
                        <MessagingCard
                            key={item._id}
                            text={item.content}
                            hour='Date Fri Jun 18 2021 15:48:16 GMT-0300 (Brasilia Standard Time)'
                            data={item}
                            isMine={false}
                            reply={item.reference}
                        />
                    )}
                />
            </ScrollView>
            {
                showEmojiPicker ?
                    <View>
                        <EmojiSelector onEmojiSelected={emoji => console.log(emoji)} style={styles.EmojiSelector} />
                    </View>
                    :
                    <View style={styles.lowerView}>
                        <Text onPress={() => showPicker()} style={styles.emoji}>😀</Text>
                        <TextInput style={styles.input} editable={true} placeholder='Escreva uma mensagem' />
                        <AntDesign name="paperclip" size={24} color="black" />
                        <AntDesign name="camerao" size={24} color="black" />
                        <MaterialCommunityIcons name="microphone-outline" size={24} color="black" />
                    </View>
            }
        </View>
    )
}