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

import dayjs from 'dayjs';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import colors from '../../styles/colors';
import { useApi } from '../../hooks/auth';
import dates from '../../locales/dates.json';

import {
  Loading,
  ModalView,
  DaysOfWeek,
  EditActivity,
  ActivityCard
} from '../../components';

const today = new Date();
const { days, months } = dates['pt-br'];

export default function Calendar() {
  const [content, setContent] = useState(false);
  const [lessons, setLessons] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);
  const [parsedLessons, setParsedLessons] = useState(false);

  const {
    loading,
    lessons: lessonsReq,
    content: contentReq
  } = useApi();

  const navigation = useNavigation();

  async function fetchClasses() {
    if (loading) return;

    setLessons(lessonsReq);
    setContent(contentReq);
    setParsedLessons(lessonsReq);
  }

  function handleModal(data) {
    if(data) setModalData(data);
    setOpenModal(!openModal);
  }

  function handleReverse() {
    setReverse(!reverse);
  }

  function handleDatePicker() {
    handleLessons();
    setShowPicker(!showPicker);
  }

  function handleActivitySelect(data) {
    navigation.navigate('Activity', { data });
  }

  function handleLessons() {
    if (!lessons) return
    const parsed = lessons.filter(
      (lesson) => {
        dayjs(lesson.deadline).format('YYYY-MM-DD') === dayjs(selectedDay).format('YYYY-MM-DD')
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
              dayjs(selectedDay).format('YYYY-MM-DD') !== dayjs(today).format('YYYY-MM-DD')
                ? dayjs(selectedDay).format('ll')
                : 'Hoje'
            }
          </Text>
          {
            showPicker && (
              <DateTimePicker
                is24Hour
                mode="date"
                display="default"
                testID="dateTimePicker"
                value={new Date(selectedDay)}
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
            Materia {`( ${content.length} )`}
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
              Atividades{` ( ${parsedLessons.length} )`}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleReverse()}>
              <FontAwesome5
                size={24}
                color={colors.heading}
                name="sort-amount-down-alt"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Cards}>
          <FlatList
            data={
              isActivity
                ? parsedLessons
                : content
            }
            inverted={reverse}
            style={styles.flatlist}
            keyExtractor={(item) => String(item._id)}
            ListEmptyComponent={(
              <View style={styles.noClass}>
                <Text style={styles.noClassText}>
                  Parece que não há nenhum conteudo para hoje
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <ActivityCard
                lesons={item}
                selected={item.isActive}
                isActivity={isActivity}
                openModal={() => handleModal(item)}
                onEndReachedThreshold={0.1}
                showsVericalScrollIndicator={false}
                onPress={() => handleActivitySelect(item)}
              />
            )}
          />
        </View>
      </ScrollView>
      <ModalView isVisible={openModal} closeModal={handleModal} half marginOfTop={0.5}>
        <EditActivity data={modalData}/>
      </ModalView>
    </View>
  );
}