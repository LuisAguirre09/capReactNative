import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PermitionScreen } from '../Pages/PermitionScreen';
import { MapScreen } from '../Pages/MapScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
      <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
      >
        <Stack.Screen name="PermitionScreen" component={PermitionScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
  );
}

