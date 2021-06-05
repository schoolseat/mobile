
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

const data = {
    name: "Jorge Henrique",
    pfp: "https://dummyimage.com/600x400/ff00ff/ffffff.png",
    bio: "a",
    stars: 5,
    level: "80",
    xp: "42000"
}
export default function profile() {
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
                    uri: data.pfp,
                }} />
                <View style={styles.headerTexts}>
                    <Text style={styles.title}>{data.name}</Text>
                    <View style={styles.data}>
                        <Text style={styles.text}>{data.bio}</Text>
                        {stars(data.stars)}
                    </View>
                </View>
            </View>
            <View style={styles.level}>
                <Text style={styles.text} >Nivel {data.level}</Text>

                <View style={styles.levelTexts}>
                    <Text style={styles.text}>Experiencia atual</Text>
                    <Text style={styles.userXp}>{data.xp} XP</Text>
                </View>
                <ProgressBar style={styles.progressbar} progress={0.3} color='#6DA7F6' />
                <Text style={styles.remainXp}>100.000 xp</Text>
            </View>
        </View>
    )
}