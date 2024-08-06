import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Card = ({ uri }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri }} />
    </View>
  );
};

export default Card;
