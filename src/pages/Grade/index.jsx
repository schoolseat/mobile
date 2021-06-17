import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/core'
import { AntDesign } from '@expo/vector-icons';

import styles from './styles'
export default function Grade() {
    const navigation = useNavigation();
    const route = useRoute();
    function handleStart() {
        navigation.navigate('Calendar')
    }
    const { grade } = route.params;

    return (
        <View>
            <View>
                <AntDesign name="arrowleft" size={30} color="white" />
                <Text>
                    {grade.discipline}
            </Text>
            </View>
            <View>

                <Image source={{uri: grade.teacher.profilePic}} />
                <Text>
                    {grade.teacher.name}
            </Text>
            </View>
            <Text>
                    {grade.school.name}
            </Text>
        </View>
    )
}