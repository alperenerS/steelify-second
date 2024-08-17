import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import Camera from '../components/Camera';
import CameraStyles from '../styles/CameraStyles';

const CameraScreen = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setPhotoUri(null);
      navigation.getParent()?.setOptions({
        tabBarVisible: true,
      });
    }
  }, [isFocused]);

  const handleCapture = (uri) => {
    setPhotoUri(uri);
    navigation.navigate('Fotoğraf', { photoUri: uri });
  };

  return (
    <ScrollView contentContainerStyle={CameraStyles.container}>
      <View style={CameraStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={CameraStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={CameraStyles.headerTitle}>Fotoğraf Çek</Text>
      </View>
      {!photoUri && (
        <View style={CameraStyles.instructionsContainer}>
          <Text style={CameraStyles.instructionsTitle}>Visual Inspection Fotoğraf Çekim Rehberi</Text>
          <Text style={CameraStyles.instructionsText}>1. Fotoğrafı aydınlık bir ortamda çekin. Yetersiz ışık, detayların kaybolmasına neden olabilir.</Text>
          <Text style={CameraStyles.instructionsText}>2. Kamerayı sabit tutarak net bir görüntü elde edin. Mümkünse tripod kullanın.</Text>
          <Text style={CameraStyles.instructionsText}>3. Çekim sırasında doğru açıyı yakalayın. Ürünün tüm detaylarını gösterecek şekilde pozisyon alın.</Text>
          <Text style={CameraStyles.instructionsText}>4. Fotoğrafın odakta olduğundan emin olun. Netlik, kaynaklı ürünlerin kalitesini değerlendirmek için kritik öneme sahiptir.</Text>
        </View>
      )}
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={CameraStyles.preview} />
      ) : (
        <Camera onCapture={handleCapture} />
      )}
    </ScrollView>
  );
};

export default CameraScreen;
