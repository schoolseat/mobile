import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import api from '../../services/api';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/core';

import { HourCard, Loading } from '../../components';

const today = new Date();
const days = [
  'Domingo',
  'Segunda',
  'Terca',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
];
const months = [
  'Janeiro',
  'Fevereiro',
  'Marco',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default function Calendar() {
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState(false);
  const [content, setContent] = useState(false);
  const [lessons, setLessons] = useState(false);
  const [parsedLessons, setParsedLessons] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    Moment(today).format('YYYY-MM-DD'),
  );

  const navigation = useNavigation();

  async function fetchClasses() {
    let { data: user } = await api.get(`users?id=0`);
    let { data: classes } = await api.get(`classes`);
    let { data: lessonsReq } = await api.get(`lessons`);
    let { data: content } = await api.get(`content`);

    if (!user || !lessonsReq || !classes || !content) return setLoading(true);

    const myUser = user[0];
    const classesMap = new Map(classes.map(classe => [classe._id, classe]));
    const lessonsMap = new Map(lessonsReq.map(lesson => [lesson._id, lesson]));

    const filteredClasses = [...new Set(myUser.classes)].reduce(
      (currentArray, classeId) =>
        currentArray.concat(classesMap.get(classeId) || []),
      [],
    );

    const mappedLessons = filteredClasses.reduce(
      (currentArray, { lessons: classeLessons }) => {
        classeLessons.forEach(lessonId => {
          if (lessonsMap.has(lessonId)) {
            currentArray.push(lessonsMap.get(lessonId));
          }
        });

        return currentArray;
      },
      [],
    );

    setLessons(mappedLessons.sort((a, b) => a.startHour - b.startHour));
    setClasses(filteredClasses);
    setContent(content);
    setLoading(false);
  }

  function handleReverse() {
    setReverse(!reverse);
  }

  function handleActivity() {
    setIsActivity(!isActivity);
  }

  function handleDatePicker() {
    setShowPicker(!showPicker);
  }

  function handleActivitySelect(activity) {
    navigation.navigate('activity', { activity });
  }

  function handleLessons() {
    if (!lessons) {
      return setLoading(true);
    }

    const parsed = lessons.filter(
      classe => classe.day === Moment(selectedDay).format('YYYY-MM-DD'),
    );

    setParsedLessons(parsed);
    setLoading(false);
  }

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    handleLessons();
  }, [selectedDay, lessons]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.date}>
          <View style={styles.day}>
            <Text style={styles.day}>{today.getDate()}</Text>
          </View>
          <View style={styles.today}>
            <Text style={styles.texts}>{days[today.getDay()]}</Text>
            <View style={styles.date}>
              <Text style={styles.texts}>{months[today.getMonth()]}</Text>
              <Text style={styles.texts}>{today.getFullYear()}</Text>
            </View>
          </View>
        </View>
        <View style={styles.text}>
          <Text onPress={() => handleDatePicker()} style={styles.text}>
            {Moment(selectedDay).format('YYYY-MM-DD') !=
            Moment(today).format('YYYY-MM-DD')
              ? days[today.getDay()]
              : 'Hoje'}
          </Text>
          {showPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDayDate) => {
                handleDatePicker();
                setSelectedDay(String(selectedDayDate));
              }}
            />
          )}
        </View>
      </View>
      <View style={styles.calendar}>
        <DaysOfWeek day={0} dayInitial='D' />
        <DaysOfWeek day={1} dayInitial='S'/>
        <DaysOfWeek day={2} dayInitial='T'/>
        <DaysOfWeek day={3} dayInitial='Q'/>
        <DaysOfWeek day={4} dayInitial='Q'/>
        <DaysOfWeek day={5} dayInitial='S'/>
        <DaysOfWeek day={6} dayInitial='S'/>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.ScrollView}
      >
        <View style={styles.ScrollViewButtons}>
          <Text
            onPress={() => handleActivity()}
            style={
              isActivity ? styles.ScrollViewText : styles.SelectedScrollViewText
            }
          >
            Materia
          </Text>
          <View style={styles.ScrollViewTexts}>
            <Text
              onPress={() => handleActivity()}
              style={
                isActivity
                  ? styles.SelectedScrollViewText
                  : styles.ScrollViewText
              }
            >
              Atividades
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleReverse()}>
              <FontAwesome5
                name="sort-amount-down-alt"
                size={24}
                color="#BCC1CD"
              />
            </TouchableOpacity>
          </View>
        </View>
          <View style={styles.Cards}>
            <FlatList
              data={
                isActivity
                  ? reverse
                    ? parsedLessons.reverse()
                    : parsedLessons
                  : reverse
                  ? content.reverse()
                  : content
              }
              keyExtractor={item => String(item._id)}
              ListEmptyComponent={
                <View style={styles.noClass}>
                  <Text style={styles.noClassText}>
                    Parece que não há nenhum conteudo para hoje
                  </Text>
                </View>
              }
              renderItem={({ item }) => (
                <HourCard
                  lesons={item}
                  classe={classes}
                  key={item._id}
                  selected={item.isActive}
                  isActivity={isActivity}
                  showsVericalScrollIndicator={false}
                  onEndReachedThreshold={0.1}
                  onPress={() => handleActivitySelect(item)}
                />
              )}
            />
          </View>
      </ScrollView>
    </View>
  );
}

export function DaysOfWeek({day, dayInitial }) {
  return (
    <View style={today.getDay() === day ? styles.SelectedDay : styles.days}>
      <Text style={today.getDay() === day ? styles.SelectedDaysText : styles.daysText}>{dayInitial}</Text>
      <Text
        style={today.getDay() === day ? styles.SelectedDaysDay : styles.daysDay}
      >
        {Moment().day(day).format('DD')}
      </Text>
    </View>
  );
}
