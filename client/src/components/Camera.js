import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import CameraStyles from '../styles/CameraStyles';
import { checkAndRequestCameraPermission } from '../permissions';

const Camera = ({ onCapture }) => {
  useEffect(() => {
    checkAndRequestCameraPermission();
  }, []);

  const handleCapture = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      (response) => {

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          Alert.alert('Hata', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          console.log('Image URI: ', response.assets[0].uri);
          onCapture(response.assets[0].uri);
        } else {
          console.log('Unknown response structure:', response);
          Alert.alert('Hata', 'Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.');
        }
      },
    );
  };

  return (
    <View style={CameraStyles.container}>
      <Button title="Fotoğraf Çek" onPress={handleCapture} />
    </View>
  );
};

export default Camera;
