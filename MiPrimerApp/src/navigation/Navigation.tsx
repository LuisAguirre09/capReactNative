import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Movies } from '../interfaces/MovieDBInterface';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined,
  DetailScreen: Movies,
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          cardStyle: {
           //
          }
        }}>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
}