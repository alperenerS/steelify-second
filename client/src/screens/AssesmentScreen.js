import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Assesment from '../components/Assesment';
import assesmentStyles from '../styles/AssesmentStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getRandomAssesments } from '../services/AssesmentService';

const AssesmentScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRandomAssesments();
        setData(result);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleReject = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleAccept = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={assesmentStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={assesmentStyles.headerTitle}>Değerlendirme</Text>
      </View>
      {data.length > 0 ? (
        <Assesment
          uri={data[currentIndex].image_link}
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
