import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import styles from './styles'

export default function HourCard({ classes, selected }) {
  const [isSelected, setSelected] = useState(false);
  const [emojiColor, setEmojiColor] = useState("black");
  const [startHour, setStartHour] = useState(false)
  const [finishHour, setFinishHourelected] = useState(false)

  function handleHour() {
    const start = classes.lessonStatus.startHour;
    const end = classes.lessonStatus.finishHour;
    if (start.length === 3) {
      setStartHour(start[0] + ':' + start[1] + start[2])
    }
    if (start.length === 4) {
      setStartHour(start[0] + start[1] + ':' + start[2] + start[3])
    }
    if (end.length === 3) {
      return setFinishHourelected(end[0] + ':' + end[1] + end[2])
    }
    if (end.length === 4) {
      return setFinishHourelected(end[0] + end[1] + ':' + end[2] + end[3])
    }
  }
  useEffect(() => {
    if (selected === true) {
      setSelected(true)
    }
    if (isSelected) {
      setEmojiColor("white");
    }
    handleHour()
  }, [])
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
      <View style={styles.card}>
        <View style={styles.hours}>
          <Text style={styles.startHour} >{startHour}</Text>
          <Text style={styles.finishHour} >{finishHour}</Text>
        </View>
        <View style={isSelected ? styles.SelectedClasses : styles.classes}>
          <Text style={isSelected ? styles.SelectedHeading : styles.classesName}>{classes.discipline}</Text>
          <Text style={isSelected ? styles.SelectedContent : styles.classesContent}>{classes.content}</Text>
          <View style={styles.data} >
            <Ionicons name="location-outline" size={24} color={emojiColor} style={styles.icons} />
            <Text style={isSelected ? styles.SelectedContent : styles.classesNumber}>{classes.class}</Text>
          </View>
          <View style={styles.data}>
            {
              classes.teacher.profilePic ?
                <Image
                  source={{
                    uri: classes.teacher.profilePic,
                  }}
                  style={styles.teacherPic}
                /> :
                <FontAwesome name="user-circle-o" size={24} color={emojiColor} style={styles.icons} />
            }
            <Text style={isSelected ? styles.SelectedData : styles.classesTName}>{classes.teacher.name}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

