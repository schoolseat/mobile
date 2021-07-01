import React from 'react';
import {
  Text, View, Image,
} from 'react-native';

import PropTypes from 'prop-types';
import Moment from 'moment';
import styles from './styles';

const today = new Date();
export default function MessagingCard({
  text, hour, data, isMine, isReply, reply,
}) {
  return (
    <View style={isMine ? styles.mineContainer : styles.container}>
      {
                isReply
                  ? <Text style={styles.reply}>{reply}</Text>
                  : null
            }
      <Image style={styles.image} source={{ uri: data.author.profilePic }} />
      <View style={isMine ? styles.textsReverse : styles.texts}>
        <Text style={styles.authorName}>{data.author.name}</Text>
        <Text
          style={styles.hour}
        >
          {
            Moment.duration(
              Moment(hour).diff(
                Moment(today),
              ),
            ).humanize(true)
            }
        </Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  );
}
MessagingCard.propTypes = {
  text: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isMine: PropTypes.bool.isRequired,
  isReply: PropTypes.bool,
  reply: PropTypes.string,
};
MessagingCard.defaultProps = {
  isReply: false,
  reply: '',
};
