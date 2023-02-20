import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from 'src/contexts';

import { MainNavigator } from 'src/navigator';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
