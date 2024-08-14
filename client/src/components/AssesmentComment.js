import React from 'react';
import { View, Text, TextInput } from 'react-native';
import AssesmentCommentStyles from '../styles/AssesmentCommentStyles';

const AssesmentComment = ({ error, setError, comment, setComment }) => {
  return (
    <>
      <View style={AssesmentCommentStyles.inputContainer}>
        <Text style={AssesmentCommentStyles.inputLabel}>Yorum</Text>
        <TextInput
          style={AssesmentCommentStyles.input}
          placeholder="Fotoğrafla ilgili yorumunuzu yazın..."
          placeholderTextColor="#000000"
          multiline
          numberOfLines={4}
          value={comment}
          onChangeText={setComment}
        />
      </View>
      <View style={AssesmentCommentStyles.inputContainer}>
        <Text style={AssesmentCommentStyles.inputLabel}>Hatalar</Text>
        <TextInput
          style={[AssesmentCommentStyles.input, AssesmentCommentStyles.errorInput]}
          placeholder="Fotoğrafta gördüğünüz hataları yazın..."
          placeholderTextColor="#000000"
          multiline
          numberOfLines={4}
          value={error}
          onChangeText={setError}
        />
      </View>
    </>
  );
};

export default AssesmentComment;
