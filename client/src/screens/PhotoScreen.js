import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import globalStyles from '../styles/GlobalStyles2';

const PhotoScreen = ({ navigation }) => {
  const takePhoto = () => {
    // Fotoğraf çekme işlemi
    navigation.navigate('Preview');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Photo Screen - Fotoğraf Çekme</Text>
      <Button title="Take Photo" onPress={takePhoto} />
    </View>
  );
};

export default PhotoScreen;
