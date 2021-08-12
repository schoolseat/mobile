import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { useApi } from '../../hooks/auth';

export default function GradeCard({ data }) {
    const [user, setUser] = useState(false);
    const { getDataById } = useApi();
    
    async function getTeacherData() {
        const User = await getDataById({ id:data, path: "users"  })
        setUser(User);
    }

    useEffect(() => {
        getTeacherData();
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{uri: user.profilePic}}/>
            </View>
            <View style={styles.nameView}> 
                <Text style={styles.name}>{user.nickname}</Text>
            </View>
        </View>
    );
}