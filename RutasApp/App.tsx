import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { PermissionsProvider } from './src/Context/PermissionsContext';
import { Navigator } from './src/navigator/Navigator';

const AppState = ({ children }: any) => {
    return(
      <PermissionsProvider>
        { children }
      </PermissionsProvider>
    )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      <Navigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App;
