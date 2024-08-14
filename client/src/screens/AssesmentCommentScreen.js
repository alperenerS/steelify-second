import React, { useState } from 'react';
import { View, Image, ScrollView, BackHandler, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AssesmentComment from '../components/AssesmentComment';
import AssesmentCommentStyles from '../styles/AssesmentCommentStyles';
import { sendAssesmentComment } from '../services/AssesmentCommentService';
import CustomPopup from '../components/CustomPopup';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AssesmentCommentScreen = ({ route, navigation }) => {
  const { photoUri, imageId } = route.params;
  const [error, setError] = useState('');
  const [comment, setComment] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const photoName = photoUri.split('/').pop().split('.')[0];

  const handleSave = async () => {
    try {
      await sendAssesmentComment(imageId, comment, error, photoUri, photoName);
      setPopupMessage('Başarıyla Kaydedildi!');
      setPopupVisible(true);
    } catch (error) {
      setPopupMessage('Fotoğraf gönderilemedi. Lütfen tekrar deneyin.');
      setPopupVisible(true);
    }
  };

  const handleConfirm = () => {
    setPopupVisible(false);
    navigation.replace('Değerlendir');
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          navigation.replace('Değerlendir');
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [navigation])
  );

  return (
    <ScrollView contentContainerStyle={AssesmentCommentStyles.container}>
      <View style={AssesmentCommentStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={AssesmentCommentStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={AssesmentCommentStyles.headerTitle}>Değerlendirme</Text>
      </View>
      <Image source={{ uri: photoUri }} style={AssesmentCommentStyles.preview} />
      <AssesmentComment
        error={error}
        setError={setError}
        comment={comment}
        setComment={setComment}
      />
      <View style={AssesmentCommentStyles.buttonContainer}>
        <TouchableOpacity style={AssesmentCommentStyles.button} onPress={handleSave}>
          <Text style={AssesmentCommentStyles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>

      <CustomPopup
        visible={isPopupVisible}
        message={popupMessage}
        onConfirm={handleConfirm}
        onClose={() => setPopupVisible(false)}
      />
    </ScrollView>
  );
};

export default AssesmentCommentScreen;
