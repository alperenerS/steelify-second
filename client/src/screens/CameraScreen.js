import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Camera from '../components/Camera';
import CameraStyles from '../styles/CameraStyles';

const CameraScreen = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState(null);

  const handleCapture = (uri) => {
    setPhotoUri(uri);
    navigation.navigate('Fotoğraf', { photoUri: uri });
  };

  return (
    <View style={CameraStyles.container}>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={CameraStyles.preview} />
      ) : (
        <Camera onCapture={handleCapture} />
      )}
    </View>
  );
};

export default CameraScreen;
