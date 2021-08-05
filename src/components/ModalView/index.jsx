import React from 'react';
import { View, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';
import styles from './styles';

export default function ModalView({ children, closeModal, half = false, ...rest }) {

  return (
    <Modal
      transparent
      animationType="slide"
      onSwipe={closeModal}
      onSwipeThreshold={20}
      swipeDirection="down"
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal} >
        <View style={
          half
          ? [styles.overlay, {
            marginTop: Dimensions.get('window').height * 0.7
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