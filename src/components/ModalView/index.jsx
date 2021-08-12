import React from 'react';
import { 
  View, 
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import Modal from 'react-native-modal';

import styles from './styles';

export default function ModalView({ children, closeModal, half = false, marginOfTop, ...rest }) {

  return (
    <Modal
      transparent
      coverScreen
      animationType="slide"
      onSwipeComplete={closeModal}
      onSwipeThreshold={20}
      swipeDirection="down"
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal} >
        <View style={
          half
          ? [styles.overlay, {
            marginTop: Dimensions.get('window').height * marginOfTop
          }]
          : styles.overlay
        }>
          <View style={styles.container}>
            <View style={styles.bar} />
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}