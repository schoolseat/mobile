import React from 'react';

import { Swipeable } from 'react-native-gesture-handler'
import styles from './styles';

export default function({text, hour, isMine, isReply, reply}) {
    return(
        <Swipeable style={isMine ? styles.mineContainer : styles.container}>
            {
            isReply ? 
            <Text style={styles.reply}>{reply}</Text> 
            : null
            }
            <Text style={styles.message}>{text}</Text>
            <Text style={styles.hour}>{hour}</Text>
        </Swipeable>
    )
}