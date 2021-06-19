import React, {useState} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/core'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import styles from './styles'
export default function Grade() {
    const [isMural, setIsMural] = useState(true)
    const navigation = useNavigation();
    const route = useRoute();

    function handleStart() {
        navigation.navigate('Calendar')
    }
    const { grade } = route.params
    console.log(grade.teacher.profilePic)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleView}>
                    <AntDesign name="arrowleft" style={styles.backIcon} onPress={() => handleStart()} size={30} color="black" />
                    <Text style={styles.discipline}>
                        {grade.discipline}
                    </Text>
                </View>
                <View style={styles.teacherView}>
                {
                grade.teacher.profilePic ?
                <Image style={styles.teacherPfp} source={{uri: grade.teacher.profilePic}} /> :
                <FontAwesome name="user-circle-o" size={24} color='black' style={styles.teacherPfp} />
                } 
                    <Text style={styles.teacherName}>
                        {grade.teacher.name}
                    </Text>
                </View>
                <Text style={styles.schoolName}>
                    {grade.school.name}
                </Text>
            </View>
            <View style={styles.buttons}>
                <Text onPress={() => setIsMural(true)} style={isMural ? styles.selectedText : styles.text}>Mural</Text>
                <Text onPress={() => setIsMural(false)} style={isMural ? styles.text : styles.selectedText}>Alunos</Text>
            </View>
        </View>
    )
}