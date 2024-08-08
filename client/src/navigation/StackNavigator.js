import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AssesmentScreen from '../screens/AssesmentScreen';
import PINScreen from '../screens/PINScreen';
import HomepageScreen from '../screens/HomepageScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Anasayfa" component={HomepageScreen} />
      <Stack.Screen name="Giriş Yap" component={LoginScreen} />
      <Stack.Screen name="Kayıt Ol" component={RegisterScreen} />
      <Stack.Screen name="Şifre Sıfırla" component={ResetPasswordScreen} />
      <Stack.Screen name="Şifremi Unuttum" component={ForgotPasswordScreen} />
      <Stack.Screen name="Fotoğraf Çek" component={CameraScreen} />
      <Stack.Screen name="Fotoğraf" component={PhotoScreen} />
      <Stack.Screen name="Profil" component={ProfileScreen} />
      <Stack.Screen name="Değerlendir" component={AssesmentScreen} />
      <Stack.Screen name="PIN" component={PINScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
