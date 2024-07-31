import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
const PreviewScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Preview Screen - Çekilen Fotoğraflar</Text>
    </View>
  );
};

export default PreviewScreen;
