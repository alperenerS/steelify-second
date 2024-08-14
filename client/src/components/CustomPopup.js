import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import CustomPopupStyles from '../styles/CustomPopupStyles';

const CustomPopup = ({ visible, message, onConfirm, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={CustomPopupStyles.overlay}>
        <View style={CustomPopupStyles.container}>
          <Text style={CustomPopupStyles.message}>{message}</Text>
          <View style={CustomPopupStyles.buttonContainer}>
            <TouchableOpacity style={CustomPopupStyles.button} onPress={onConfirm}>
              <Text style={CustomPopupStyles.buttonText}>Tamam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[CustomPopupStyles.button, CustomPopupStyles.cancelButton]} onPress={onClose}>
              <Text style={CustomPopupStyles.buttonText}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomPopup;
