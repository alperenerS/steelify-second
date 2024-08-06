import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import assesmentStyles from '../styles/AssesmentStyles';

const Assesment = ({ uri }) => {
  return (
    <View style={assesmentStyles.card}>
      <Image style={assesmentStyles.image} source={{ uri }} />
    </View>
  );
};

export default Assesment;
