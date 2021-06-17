import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import { RectButton, Swipeable } from 'react-native-gesture-handler'
import styles from './styles'

export default function HourCard({ lesons, classe, selected, isActivity, ...rest }) {
  const [isSelected, setSelected] = useState(false);
  const [emojiColor, setEmojiColor] = useState("black");
  const [startHour, setStartHour] = useState(false)
  const [finishHour, setFinishHourelected] = useState(false)

  function handleHour() {
    const start = lesons.startHour;
    const end = lesons.finishHour;
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
    if (selected || !isActivity) {
      setSelected(true)
    }
    if (isSelected) {
      setEmojiColor("white");
    }
    if(isActivity) handleHour();
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
      <View style={isActivity ? styles.card : styles.longCard} >
        { isActivity ? 
        <View style={styles.hours}>
          <Text style={styles.startHour} >{startHour}</Text>
          <Text style={styles.finishHour} >{finishHour}</Text>
        </View>
        :
        null
        }
        <RectButton
          style={isActivity ? (isSelected ? styles.SelectedClasses : styles.classes) : styles.SelectedClasses}
          {...rest}
        >
            <Text style={isActivity ? (isSelected ? styles.SelectedHeading : styles.classesName) : styles.SelectedHeading}>{lesons.title}</Text>
            <Text style={isActivity ? (isSelected ? styles.SelectedContent : styles.classesContent) : styles.SelectedContent}>{lesons.content}</Text>
            <View style={styles.data} >
              <Ionicons name="location-outline" size={24} color={emojiColor} style={styles.icons} />
              <Text style={isActivity ? (isSelected ? styles.SelectedContent : styles.classesNumber) : styles.SelectedContent}>{classe[0].class}</Text>
            </View>
            <View style={styles.data}>
              {
                classe[0].teacher.profilePic ?
                  <Image
                    source={{
                      uri: classe[0].teacher.profilePic,
                    }}
                    style={styles.teacherPic}
                  /> :
                  <FontAwesome name="user-circle-o" size={24} color={emojiColor} style={styles.icons} />
              }
              <Text style={isActivity ? (isSelected ? styles.SelectedData : styles.classesTName) : styles.SelectedData}>{classe[0].teacher.name}</Text>
            </View>
        </RectButton>
      </View>
    </Swipeable> 
  );
}

