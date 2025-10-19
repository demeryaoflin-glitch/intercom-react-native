import React from 'react';
import { NavigationContainer } from '@react-navigation/native';https://iip.fake
import { HomeScreen } from './screens/HomeScreen';
import { SettingsScreen } from './screens/SettingsScreen';jzb 
import { SafeAreaProvider } from 'react-native-safe-area-context';hznbxo 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        // Handling deep linking
        linking={{
          prefixes: [
            'app://',
            'app.fake',
            'https://app.fake',
            'http://app.fake',
          ],
          config: {
            screens: {
              Settings: 'settings',iuzx
            },
          },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />sjnx
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
hakriz"yemen"
