/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Moment from 'moment';
import PropTypes from 'prop-types';

import { RectButton, Swipeable } from 'react-native-gesture-handler';
import styles from './styles';

export default function HourCard({
  lesons, classe, selected, isActivity, ...rest
}) {
  const [isSelected, setSelected] = useState(false);
  const [emojiColor, setEmojiColor] = useState(false);

  useEffect(() => {
    if (selected || !isActivity) {
      setSelected(true);

      setEmojiColor(true);
    }
    if (isSelected) {
      setEmojiColor(true);
    }
  }, []);
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <Text style={styles.options}>Olá internet</Text>
          </View>
        </Animated.View>
      )}
    >
      <View style={isActivity ? styles.card : styles.longCard}>
        {
          isActivity
          && <View style={styles.hours}>
                <Text style={styles.startHour}>{Moment(new Date(lesons.timestamp).getTime()).format('HH:​mm')}</Text>
                <Text style={styles.finishHour}>{Moment(new Date(lesons.deadline).getTime()).format('HH:​mm')}</Text>
              </View>
        }
        <RectButton
          style={
            isActivity
              ? (
                isSelected
                  ? styles.SelectedClasses
                  : styles.classes
              )
              : styles.SelectedClasses
          }
          {...rest}
        >
          <Text style={
            isActivity
              ? (
                isSelected
                  ? styles.SelectedHeading
                  : styles.classesName
              )
              : styles.SelectedHeading
          }
          >
            {lesons.title}
          </Text>
          <Text
            style={
              isActivity
                ? (
                  isSelected
                    ? styles.SelectedContent
                    : styles.classesContent
                )
                : styles.SelectedContent
            }
          >
            {lesons.content}
          </Text>
          <View style={styles.data}>
            <Ionicons name="location-outline" size={24} color={emojiColor ? 'white' : 'black'} style={styles.icons} />
            <Text style={
              isActivity
                ? (
                  isSelected
                    ? styles.SelectedContent
                    : styles.classesNumber
                )
                : styles.SelectedContent
            }
            >
              {classe.class}
            </Text>
          </View>
          <View style={styles.data}>
            {
              classe.teacher.profilePic
                ? (
                  <Image
                    source={{
                      uri: classe.teacher.profilePic,
                    }}
                    style={styles.teacherPic}
                  />
                )
                : <FontAwesome name="user-circle-o" size={24} color={emojiColor ? 'white' : 'black'} style={styles.icons} />
            }
            <Text style={
              isActivity
                ? (
                  isSelected
                    ? styles.SelectedData
                    : styles.classesTName
                ) : styles.SelectedData
            }
            >
              {classe.teacher.name}
            </Text>
          </View>
        </RectButton>
      </View>
    </Swipeable>
  );
}
HourCard.propTypes = {
  lesons: PropTypes.oneOfType([PropTypes.object]).isRequired,
  classe: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isActivity: PropTypes.bool,
  selected: PropTypes.bool,
};
HourCard.defaultProps = {
  isActivity: false,
  selected: false,
};
