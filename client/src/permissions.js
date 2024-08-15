import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Alert } from 'react-native';

export const checkAndRequestCameraPermission = async () => {
  const permission = Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  });

  const result = await check(permission);

  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log('Bu özellik mevcut değil (bu cihazda / bu bağlamda).');
      Alert.alert('Uyarı', 'Bu özellik mevcut değil.');
      break;
    case RESULTS.DENIED:
      console.log('İzin verilmedi, ancak istenebilir.');
      const requestResult = await request(permission);
      if (requestResult === RESULTS.GRANTED) {
      } else {
        Alert.alert('Kamera İzni Gerekli', 'Uygulamayı kullanmak için kamera izni vermelisiniz.');
      }
      break;
    case RESULTS.LIMITED:
      console.log('İzin sınırlı: bazı işlemler yapılabilir.');
      Alert.alert('Dikkat', 'İzin sınırlı: bazı işlemler yapılabilir.');
      break;
    case RESULTS.GRANTED:
      break;
    case RESULTS.BLOCKED:
      console.log('İzin reddedildi ve artık istenemez.');
      Alert.alert('Kamera İzni Engellendi', 'İzin reddedildi ve artık istenemez. Lütfen ayarlardan izni açın.');
      break;
  }
};
