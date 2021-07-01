/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

export default function messagescard({
  name, lastContent, profilePic, allMessages, ...rest
}) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      {
        profilePic
          ? <Image style={styles.image} source={{ uri: profilePic }} />
          : <FontAwesome name="user-circle-o" style={styles.image} size={45} color="black" />
            }
      <View style={styles.texts}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.subject}>
          {lastContent}
        </Text>
      </View>
    </RectButton>
  );
}
