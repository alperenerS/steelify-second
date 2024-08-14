import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import assesmentStyles from '../styles/AssesmentStyles';

const Assesment = ({ uri, onReject, onAccept }) => {
  return (
    <View style={assesmentStyles.card}>
      <Image style={assesmentStyles.image} source={{ uri }} />
      <View style={assesmentStyles.buttonContainer}>
        <TouchableOpacity style={assesmentStyles.rejectButton} onPress={onReject}>
          <Text style={assesmentStyles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={assesmentStyles.acceptButton} onPress={onAccept}>
          <Text style={assesmentStyles.buttonText}>✔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Assesment;
