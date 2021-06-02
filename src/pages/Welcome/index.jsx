import React, { useEffect, useState } from 'react';
import Moment from 'moment'
import api from '../../services/api';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import { HourCard } from '../../components';

const today = new Date();
const days = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
const months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function Calendar() {
  const [TodayIsSunday, setTodayIsSunday] = useState(false);
  const [TodayIsMonday, setTodayIsMonday] = useState(false);
  const [TodayIsTuesday, setTodayIsTuesday] = useState(false);
  const [TodayIsWenesday, setTodayIsWenesday] = useState(false);
  const [TodayIsFriday, setTodayIsFriday] = useState(false);
  const [TodayIsThursday, setTodayIsThursday] = useState(false);
  const [TodayIsSaturday, setTodayIsSaturday] = useState(false);
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState(true);
  const [filteredClasses, setFilteredClasses] = useState();

  async function fetchClasses() {
    const { data } = await api
      .get(`classes`)

    if (!data) return setLoading(true)
    setClasses(data);
    setLoading(false)
  }
  function WhatDayIsToday() {
    const day = today.getDay();
    switch (day) {
      case 0:
        setTodayIsSunday(true);
        break;
      case 1:
        setTodayIsMonday(true);
        break;
      case 2:
        setTodayIsTuesday(true);
        break;
      case 3:
        setTodayIsWenesday(true);
        break;
      case 4:
        setTodayIsThursday(true);
        break;
      case 5:
        setTodayIsFriday(true);
        break;
      case 6:
        setTodayIsSaturday(true);
        break
      default:
        setTodayIsSunday(false);
        setTodayIsMonday(false);
        setTodayIsTuesday(false);
        setTodayIsWenesday(false);
        setTodayIsFriday(false);
        setTodayIsSaturday(false);
        break;
    }
  }
  useEffect(() => {
    WhatDayIsToday();
    fetchClasses();
  }, []);

  if (loading) {
    return <Text>Carregando esse carai</Text>
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
          <Text style={styles.text}>Hoje</Text>
        </View>
      </View>
      <View style={styles.calendar}>
        <View style={TodayIsSunday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsSunday ? styles.SelectedDaysText : styles.daysText}>D</Text>
          <Text style={
            TodayIsSunday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(0).format('DD')}
          </Text>
        </View>
        <View style={TodayIsMonday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsMonday ? styles.SelectedDaysText : styles.daysText}>S</Text>
          <Text style={
            TodayIsMonday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(1).format('DD')}
          </Text>
        </View>
        <View style={TodayIsTuesday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsTuesday ? styles.SelectedDaysText : styles.daysText}>T</Text>
          <Text style={
            TodayIsTuesday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(2).format('DD')}
          </Text>
        </View>
        <View style={TodayIsWenesday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsWenesday ? styles.SelectedDaysText : styles.daysText}>Q</Text>
          <Text style={
            TodayIsWenesday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(3).format('DD')}
          </Text>
        </View>
        <View style={TodayIsThursday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsThursday ? styles.SelectedDaysText : styles.daysText}>Q</Text>
          <Text style={
            TodayIsThursday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(4).format('DD')}
          </Text>
        </View>
        <View style={TodayIsFriday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsFriday ? styles.SelectedDaysText : styles.daysText}>S</Text>
          <Text style={
            TodayIsFriday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(5).format('DD')}
          </Text>
        </View>
        <View style={TodayIsSaturday ? styles.SelectedDay : styles.days}>
          <Text style={TodayIsSaturday ? styles.SelectedDaysText : styles.daysText}>S</Text>
          <Text style={
            TodayIsSaturday ? styles.SelectedDaysDay : styles.daysDay
          }
          >
            {Moment().day(6).format('DD')}
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.ScrollView}>
        <View style={styles.ScrollViewButtons}>
            <View style={styles.ScrollViewTexts}>
              <Text style={styles.ScrollViewText}>Horario</Text> 
              <Text style={styles.ScrollViewText}>Materia</Text> 
            </View>
            <View>
              <TouchableOpacity>
                  <FontAwesome5 name="sort-amount-down-alt" size={24} color="#BCC1CD" />
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.Cards}>
          {
            Object.values(classes).map(card => <HourCard classes={card} key={card._id} selected={card.lessonStatus.isActive} />)
          }

        </View>
      </ScrollView>
    </View>
  );
}
