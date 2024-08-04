import * as React from 'react';
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { checkAndRequestInternetPermission } from './src/permissions';

const App = () => {
  useEffect(() => {
    checkAndRequestInternetPermission();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
