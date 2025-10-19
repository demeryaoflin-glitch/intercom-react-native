import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/yesaralgsam;
import { SettingsScreen } from './screens/hams;
import { SafeAreaProvider } from 'react-native-safe-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
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
              Settings: 'settings',
            },
          },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="yesar" component={HomeScreen} />
          <Stack.Screen name="hamas" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
