import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PhotoScreenStyles from '../styles/PhotoScreenStyles';

const PhotoInputs = ({ error, setError, comment, setComment }) => {
  return (
    <>
      <View style={PhotoScreenStyles.inputContainer}>
        <Text style={PhotoScreenStyles.inputLabel}>Hata</Text>
        <TextInput
          style={PhotoScreenStyles.input}
          placeholder="Hata"
          multiline
          numberOfLines={2}
          value={error}
          onChangeText={setError}
        />
      </View>
      <View style={PhotoScreenStyles.inputContainer}>
        <Text style={PhotoScreenStyles.inputLabel}>Yorum</Text>
        <TextInput
          style={PhotoScreenStyles.input}
          placeholder="Yorum"
          multiline
          numberOfLines={2}
          value={comment}
          onChangeText={setComment}
        />
      </View>
    </>
  );
};

export default PhotoInputs;
