import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import assesmentStyles from '../styles/AssesmentStyles';

const Assesment = ({ uri, imageId, onReject }) => {
  const navigation = useNavigation();

  const handleAccept = () => {
    navigation.navigate('Yorumlu Değerlendirme', {
      photoUri: uri,
      imageId: imageId,
    });
  };

  const handleReject = () => {
    onReject();
  };

  return (
    <View style={assesmentStyles.card}>
      <Image style={assesmentStyles.image} source={{ uri }} />
      <View style={assesmentStyles.buttonContainer}>
        <TouchableOpacity style={assesmentStyles.rejectButton} onPress={handleReject}>
          <Text style={assesmentStyles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={assesmentStyles.acceptButton} onPress={handleAccept}>
          <Text style={assesmentStyles.buttonText}>✔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Assesment;
