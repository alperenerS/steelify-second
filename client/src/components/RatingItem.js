import React from 'react';
import { View, Text } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import RatingItemStyles from '../styles/RatingItemStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RatingItem = ({ name, description, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let starName = 'star-outline';
      if (i <= Math.floor(rating)) {
        starName = 'star';
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        starName = 'star-half-full';
      }
      stars.push(
        <Icon
          key={i}
          name={starName}
          size={20}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <List.Item
      style={RatingItemStyles.item}
      title={name}
      description={description}
      left={() => <Avatar.Text size={40} label={name[0]} />}
      right={() => <View style={RatingItemStyles.rating}>{renderStars()}</View>}
    />
  );
};

export default RatingItem;
