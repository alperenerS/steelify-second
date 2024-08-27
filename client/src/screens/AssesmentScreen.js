import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Assesment from '../components/Assesment';
import assesmentStyles from '../styles/AssesmentStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getRandomAssesments } from '../services/AssesmentService';

const AssesmentScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getRandomAssesments();
      setData(result);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Error fetching assessments:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();

      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.navigate('Anasayfa');
        return true;
      });

      return () => backHandler.remove();
    }, [])
  );

  const handleReject = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      fetchData();
    }
  };

  const handleAccept = () => {
    const selectedImageId = data[currentIndex]?.id;
    const photoUri = data[currentIndex]?.image_link;

    if (selectedImageId) {
      navigation.navigate('AssesmentCommentScreen', { photoUri, imageId: selectedImageId });
    } else {
      console.error('Image ID bulunamadı.');
    }
  };

  if (loading) {
    return (
      <View style={assesmentStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={assesmentStyles.container}>
      <View style={assesmentStyles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')} style={assesmentStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={assesmentStyles.headerTitle}>Değerlendirme</Text>
      </View>
      {data.length > 0 ? (
        <Assesment
          uri={data[currentIndex]?.image_link}
          imageId={data[currentIndex]?.id}
          onReject={handleReject}
          onAccept={handleAccept}
        />
      ) : (
        <Text style={assesmentStyles.noMoreCardsText}>
          Şimdilik Değerlendirilecek Bir Şey Yok. Daha Sonra Tekrar Deneyin.
        </Text>
      )}
    </View>
  );
};

export default AssesmentScreen;
