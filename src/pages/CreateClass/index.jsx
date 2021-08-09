/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

import styles from './styles';
import { Button } from '../../components'
import Class_Stuck_at_Home_Monitor from '../../assets/Class-Stuck at Home Monitor.svg';

export default function Notifications() {

  const navigation = useNavigation();

  function handleClassSelect(grade) {
    navigation.navigate('Grade', { grade });
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        barStyle="white-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.greenContainer}>
        <Text style={styles.title}>Criar turma</Text>
        <Class_Stuck_at_Home_Monitor width={300} height={150} />
      </View>
      <View style={styles.data}>
        <Text style={styles.texts}>
          Nome da turma
        </Text>
        <TextInput
          style={styles.textsinput}
          numberOfLines={1}
          editable
        />
        <Text style={styles.texts}>
          Nome da escola
        </Text>
        <TextInput
          style={styles.textsinput}
          numberOfLines={1}
          editable
        />
        <Text style={styles.texts}>
          Bio da turma
        </Text>
        <TextInput
          style={styles.textsinput}
          numberOfLines={1}
          editable
        />
      </View>
      <View style={{ alignItems: 'center', marginTop: 25 }}>
        <Button name="Entendido" />
      </View>

    </View>
  );
}
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}