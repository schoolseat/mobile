/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Moment from 'moment';
import PropTypes from 'prop-types';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import colors from '../../styles/colors';

export default function HourCard({
  lesons, classe, selected, isActivity, openModal, ...rest
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
                ? [styles.classes, {
                  backgroundColor: colors.cards_selected_background
                }]
                : styles.classes
            )
            : [styles.classes, {
              backgroundColor: colors.cards_selected_background
            }]
        }
        {...rest}
      >
        <View style={styles.firstLine}>
          <View>
            <Text style={
              isActivity
                ? (
                  isSelected
                    ? [styles.classesName, {
                      color: colors.white,
                    }]
                    : styles.classesName
                )
                : [styles.classesName, {
                  color: colors.white,
                }]
            }
            >
              {lesons.title}
            </Text>
            <Text
              style={
                isActivity
                  ? (
                    isSelected
                      ? [styles.classesContent, {
                        color: colors.white,
                      }]
                      : styles.classesContent
                  )
                  : [styles.classesContent, {
                    color: colors.white,
                  }]
              }
            >
              {lesons.content}
            </Text>
          </View>
          <TouchableOpacity onPress={openModal} style={styles.TouchableOpacity}>
          <Text  style={
                isActivity
                  ? (
                    isSelected
                      ? [styles.dots, {
                        color: colors.white,
                      }]
                      : styles.dots
                  )
                  : [styles.dots, {
                    color: colors.white,
                  }]
              }>
            . .
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.data}>
          <Ionicons name="location-outline" size={24} color={emojiColor ? 'white' : 'black'} style={styles.icons} />
          <Text style={
            isActivity
              ? (
                isSelected
                  ? [styles.classesNumber, {
                    color: colors.white,
                  }]
                  : styles.classesNumber
              )
              : [styles.classesNumber, {
                color: colors.white,
              }]
          }
          >
            {classe.class}
          </Text>
        </View>
        <View style={styles.data}>
          {
            true
              ? <FontAwesome
                name="user-circle-o"
                size={24}
                color={emojiColor ? 'white' : 'black'}
                style={styles.icons}
              />
              : <Image
                source={{
                  uri: classe.teacher.profilePic,
                }}
                style={styles.teacherPic}
              />
          }
          <Text style={
            isActivity
              ? (
                isSelected
                  ? [styles.classesTName, {
                    color: colors.white,
                  }]
                  : styles.classesTName
              )
              : [styles.classesTName, {
                color: colors.white,
              }]
          }
          >
            {/* {classe.teacher.name} */}
          </Text>
        </View>
      </RectButton>
    </View>
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
