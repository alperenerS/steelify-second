import React from 'react';
import { View } from 'react-native';
import Homepage from '../components/Homepage';
import homepageStyles from '../styles/HomepageStyles';

const HomepageScreen = () => {
  return (
    <View style={homepageStyles.screenContainer}>
      <Homepage />
    </View>
  );
};

export default HomepageScreen;
