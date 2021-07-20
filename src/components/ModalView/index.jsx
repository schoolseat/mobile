import React from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default function ModalView({children,closeModal, ...rest}) {

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
      <View style={styles.overlay}>
        <View style={styles.container}>
            <View style={styles.bar} />
            {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
  );
}