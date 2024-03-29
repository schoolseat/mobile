/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';

export default function ActivityCard({
  lesons, selected, isActivity, openModal, ...rest
}) {
  const [classe, setClasse] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [emojiColor, setEmojiColor] = useState(false);

  const { getDataById } = useApi();

  async function getTeacherData() {
    const id = lesons.classe
    const classeReq = await getDataById({ id, path: "classes" });
    const data = await getDataById({ id: classeReq.teacher, path: "users" });
    setTeacher(data);
    setClasse(classeReq);
  }

  useEffect(() => {
    getTeacherData();
  }, [])

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
          <Text style={styles.startHour}>{dayjs(lesons.timestamp).format('HH:​mm')}</Text>
          <Text style={styles.finishHour}>{dayjs(lesons.deadline).format('HH:​mm')}</Text>
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
              {
               isActivity ?
               (
                lesons.title.length > 10
                 ? lesons.title.slice(0, 10).concat(" ", '...')
                 : lesons.title
               ) 
               : lesons.title
               }
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
              {
              isActivity ?
                (
                  lesons.content.length > 10
                  ? lesons.content.slice(0, 10).concat(" ", '...')
                  : lesons.content
                ) 
                : (
                  lesons.content.length > 15
                    ? lesons.content.slice(0, 15).concat(" ", '...')
                    : lesons.content)}
            </Text>
          </View>
          <BorderlessButton onPress={openModal} style={styles.TouchableOpacity}>
            <Text style={
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
              .{'\n'}.
            </Text>
          </BorderlessButton>
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
            {classe.school}
          </Text>
        </View>
        <View style={styles.data}>
          {
            teacher.profilePic
              ? <FontAwesome
                name="user-circle-o"
                size={24}
                color={emojiColor ? 'white' : 'black'}
                style={styles.icons}
              />
              : <Image
                source={{
                  uri: teacher.profilePic,
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
            {teacher.name}
          </Text>
        </View>
      </RectButton>
    </View>
  );
}
ActivityCard.propTypes = {
  lesons: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isActivity: PropTypes.bool,
  selected: PropTypes.bool,
};
ActivityCard.defaultProps = {
  isActivity: false,
  selected: false,
};
