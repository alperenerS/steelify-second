import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform, Alert } from 'react-native';

export const checkAndRequestInternetPermission = async () => {
  const permission = Platform.select({
    ios: PERMISSIONS.IOS.INTERNET,
    android: PERMISSIONS.ANDROID.INTERNET,
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
        console.log('İzin verildi.');
      } else {
        Alert.alert('İnternet İzni Gerekli', 'Uygulamayı kullanmak için internet izni vermelisiniz.');
      }
      break;
    case RESULTS.LIMITED:
      console.log('İzin sınırlı: bazı işlemler yapılabilir.');
      Alert.alert('Dikkat', 'İzin sınırlı: bazı işlemler yapılabilir.');
      break;
    case RESULTS.GRANTED:
      console.log('İzin verildi.');
      break;
    case RESULTS.BLOCKED:
      console.log('İzin reddedildi ve artık istenemez.');
      Alert.alert('İnternet İzni Engellendi', 'İzin reddedildi ve artık istenemez. Lütfen ayarlardan izni açın.');
      break;
  }
};
