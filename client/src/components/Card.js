import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Card = ({ uri }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Card;
