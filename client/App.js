import * as React from 'react';
import {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {checkAndRequestCameraPermission} from './src/permissions';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  useEffect(() => {
    checkAndRequestCameraPermission();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
