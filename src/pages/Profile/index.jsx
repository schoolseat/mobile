
import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import styles from './styles';
import colors from '../../styles/colors';

import { Button } from '../../components';
import { useNavigation } from '@react-navigation/core';
import Api from '../../services/api';


export default function profile() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);

    async function fetchMessages() {
        const { data } = await api
          .get(`users?id=0`)
    
        if (!data) return setLoading(true);
        setUser(data);
        setLoading(false);
      }
    const navigation = useNavigation();
    function handleStart() {
      navigation.navigate('UserIdentification')
  }
    function stars(total) {
        if (!total || total === 0 ) {
            return <View style={styles.stars}>
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
            </View>
        }
        if (total === 1) {
            return <View style={styles.stars}>
                <AntDesign name="star" size={24} color={colors.yellow} />
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
                <AntDesign name="staro" size={24} color={colors.heading}  />
            </View>
        }
        if (total === 2) {
            return <View style={styles.stars}>
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="staro" size={20} color='black' />
                <AntDesign name="staro" size={20} color='black' />
                <AntDesign name="staro" size={20} color='black' />
            </View>
        }
        if (total === 3) {
            return <View style={styles.stars}>
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="staro" size={20} color='black' />
                <AntDesign name="staro" size={20} color='black' />
            </View>
        }
        if (total === 4) {
            return <View style={styles.stars}>
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="staro" size={20} color='black' />
            </View>
        }
        if (total === 5) {
            return <View style={styles.stars}>
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
                <AntDesign name="star" size={20} color={colors.yellow} />
            </View>
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{
                    uri: user.profilePic,
                }} />
                <View style={styles.headerTexts}>
                    <Text style={styles.title}>{user.name}</Text>
                    <View style={styles.data}>
                        <Text style={styles.text}>{user.bio}</Text>
                        {stars(user.stars)}
                    </View>
                </View>
            </View>
            <View style={styles.level}>
                <Text style={styles.text} >Nivel {user.level}</Text>

                <View style={styles.levelTexts}>
                    <Text style={styles.text}>Experiencia atual</Text>
                    <Text style={styles.userXp}>{user.xp} XP</Text>
                </View>
                <ProgressBar style={styles.progressbar} progress={0.3} color='#6DA7F6' />
                <Text style={styles.remainXp}>100.000 xp</Text>
            </View>
            <Button name="Deslogar" onPress={() => handleStart()}/>

        </View>
    )
}