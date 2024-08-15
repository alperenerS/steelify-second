import React from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import loadingPopupStyles from '../styles/LoadingPopupStyles';

const LoadingPopup = ({ visible }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={loadingPopupStyles.overlay}>
        <View style={loadingPopupStyles.container}>
          <ActivityIndicator size="large" color="#FF6F00" />
          <Text style={loadingPopupStyles.loadingText}>Yükleniyor...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingPopup;
