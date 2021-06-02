import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  Image
  } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import styles from './styles'

const today = new Date();
export default function HourCard({ classes, selected }) {
  const [isSelected, setSelected] = useState(false)
  const [emojiColor, setEmojiColor] = useState("black")

  useEffect(() => {
    if(selected === true) {
      setSelected(true)
  }
    if(isSelected) {
    setEmojiColor("white");
  }
  }, [])
  return (
    <View style={styles.card}>
      <View style={styles.hours}>
        <Text style={styles.startHour} >{classes.lessonStatus.startHour}</Text>
        <Text style={styles.finishHour} >{classes.lessonStatus.finishHour}</Text>
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
          <Text style={isSelected ? styles.SelectedData :  styles.classesTName}>{classes.teacher.name}</Text>
        </View>
      </View>
    </View>
  );
}

