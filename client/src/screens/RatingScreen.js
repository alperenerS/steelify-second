import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const RatingScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Rating Screen - Başkalarının Fotoğraflarını Değerlendirme</Text>
    </View>
  );
};

export default RatingScreen;
