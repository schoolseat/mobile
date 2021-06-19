import React from 'react';
import {
    Text, View, Image
} from 'react-native'
import styles from './styles';
import Moment from 'moment';

const today = new Date();
export default function MessagingCard({ text, hour, data, isMine, isReply, reply }) {
    return (
        <View style={isMine ? styles.mineContainer : styles.container}>
            {
                isReply ?
                    <Text style={styles.reply}>{reply}</Text>
                    : null
            }
            <Image style={styles.image} source={{ uri: data.author.profilePic }} />
            <View style={isMine? styles.textsReverse : styles.texts}>
                <Text style={styles.authorName}>{data.author.name}</Text>
                <Text style={styles.hour}>{Moment.duration(Moment(hour).diff(Moment(today))).humanize(true)}</Text>
            </View>
            <View style={styles.texts}>
                <Text style={styles.message}>{text}</Text>
            </View>
        </View>
    )
}