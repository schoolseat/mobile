import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function NotificationsCard({ title, body, ...rest }) {

  return (
    <TouchableOpacity
    style={styles.container} 
    {...rest}
    >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{body}</Text>
    </TouchableOpacity>
  );
}