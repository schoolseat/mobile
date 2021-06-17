import React, {useState, useEffect} from 'react';
import {
    Image,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core'
import { AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import EmojiSelector from 'react-native-emoji-selector'

import styles from './styles';
export default function Messaging() {
    const [showEmojiPicker, setshowEmojiPicker] = useState(false);

    
    const navigation = useNavigation();
    const route = useRoute();
    function handleStart() {
        navigation.navigate('Calendar')
    }
    function showPicker() {
        setshowEmojiPicker(!showEmojiPicker)
    }
    const { data } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity style={styles.touchable} onPress={() => handleStart()}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.name}>{data.author.name}</Text>
                {
                data.author.profilePic ?
                    <Image style={styles.image} source={{uri:  data.author.profilePic}} /> :
                    <FontAwesome name="user-circle-o" style={styles.image} size={45} color='black' />
                }
            </View>
            <ScrollView>

            </ScrollView>
            { 
            showEmojiPicker ? 
            <View>
            <EmojiSelector onEmojiSelected={emoji => console.log(emoji)}  style={styles.EmojiSelector} />
            </View> 
            :
            <View style={styles.lowerView}>
                <Text onPress={() => showPicker()} style={styles.emoji}>😀</Text>
            <TextInput style={styles.input} editable={true} placeholder='Escreva uma mensagem'/>
            <AntDesign name="paperclip" size={24} color="black" />
            <AntDesign name="camerao" size={24} color="black" />
            <MaterialCommunityIcons name="microphone-outline" size={24} color="black" />
            </View>
            }
        </View>
    )
}