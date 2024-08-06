import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import cardStyles from '../styles/AssesmentStyles';

const Card = ({ uri }) => {
  return (
    <View style={cardStyles.card}>
      <Image style={cardStyles.image} source={{ uri }} />
    </View>
  );
};

export default Card;
