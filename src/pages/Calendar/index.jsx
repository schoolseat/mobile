/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,

} from 'react-native';

import Moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';
import { HourCard, ModalView, Loading } from '../../components';

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
  const [content, setContent] = useState(false);
  const [lessons, setLessons] = useState(false);
  const [parsedLessons, setParsedLessons] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);
  const [openModal, setOpenModal] = useState(false);

  const {
    lessons: lessonsReq,
    content: contentReq,
    loading
  } = useApi();

  const navigation = useNavigation();

  async function fetchClasses() {
    if (loading) return;

    setLessons(lessonsReq);
    setParsedLessons(lessonsReq);
    setContent(contentReq);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleReverse() {
    setReverse(!reverse);
  }

  function handleDatePicker() {
    handleLessons();
    setShowPicker(!showPicker);
  }

  function handleActivitySelect(activity) {
    navigation.navigate('Activity', { activity });
  }

  function handleLessons() {
    if (!lessons) return

    const parsed = lessons.filter(
      (lesson) => {
        Moment(lesson.deadline).format('YYYY-MM-DD') === Moment(selectedDay).format('YYYY-MM-DD')
      }
    );

    setParsedLessons(parsed);
    return 0;
  }

  useEffect(() => {
    fetchClasses();
  }, []);

  if (loading || !content) {
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
            {
              Moment(selectedDay).format('YYYY-MM-DD') !== Moment(today).format('YYYY-MM-DD')
                ? Moment(selectedDay).format('ll')
                : 'Hoje'
            }
          </Text>
          {
            showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={new Date(selectedDay)}
                mode="date"
                is24Hour
                display="default"
                onChange={(event, selectedDayDate) => {
                  handleDatePicker();
                  setSelectedDay(String(selectedDayDate));
                }}
                maximumDate={new Date(2100, 0, 1)}
                minimumDate={new Date(2021, 0, 1)}
              />
            )
          }
        </View>
      </View>
      <View style={styles.calendar}>
        <DaysOfWeek day={0} dayInitial="D" />
        <DaysOfWeek day={1} dayInitial="S" />
        <DaysOfWeek day={2} dayInitial="T" />
        <DaysOfWeek day={3} dayInitial="Q" />
        <DaysOfWeek day={4} dayInitial="Q" />
        <DaysOfWeek day={5} dayInitial="S" />
        <DaysOfWeek day={6} dayInitial="S" />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.ScrollView}
      >
        <View style={styles.ScrollViewButtons}>
          <Text
            onPress={() => setIsActivity(false)}
            style={
              !isActivity
                ? [
                  styles.ScrollViewText,
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: colors.heading
                  }
                ]
                : styles.ScrollViewText
            }
          >
            Materia
          </Text>
          <View style={styles.ScrollViewTexts}>
            <Text
              onPress={() => setIsActivity(true)}
              style={
                isActivity
                  ? [
                    styles.ScrollViewText,
                    {
                      borderBottomWidth: 1,
                      borderBottomColor: colors.heading
                    }
                  ]
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
            //keyExtractor={(item) => String(item._id)}
            ListEmptyComponent={(
              <View style={styles.noClass}>
                <Text style={styles.noClassText}>
                  Parece que não há nenhum conteudo para hoje
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <HourCard
                lesons={item}
                classe={item.classe}
                selected={item.isActive}
                isActivity={isActivity}
                openModal={handleOpenModal}
                onEndReachedThreshold={0.1}
                showsVericalScrollIndicator={false}
                onPress={() => handleActivitySelect(item)}
              />
            )}
            style={styles.flatlist}
          />
        </View>
      </ScrollView>
      <ModalView visible={openModal} closeModal={handleCloseModal}>
        <Text> Quem mora em tilambuco</Text>
      </ModalView>
    </View>
  );
}

export function DaysOfWeek({ day, dayInitial }) {
  return (
    <View style={
      today.getDay() === day
        ? [styles.days, {
          borderRadius: 8,
          margin: 5,
          padding: 10,
          backgroundColor: colors.orange
        }]
        : styles.days
    }
    >
      <Text style={
        today.getDay() === day
          ? [styles.daysText, { color: colors.white }]
          : styles.daysText
      }
      >
        {dayInitial}
      </Text>
      <Text
        style={today.getDay() === day
          ? {
            color: colors.white,
            fontFamily: fonts.heading
          }
          : styles.daysDay}
      >
        {Moment().day(day).format('DD')}
      </Text>
    </View>
  );
}

DaysOfWeek.propTypes = {
  day: PropTypes.number.isRequired,
  dayInitial: PropTypes.string.isRequired,
};
