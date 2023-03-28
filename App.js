import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './src/screens/auth';
import Dashboard from './src/screens/dashboard';
import Splash from './src/screens/splash';
import AuthStackNavigator from './src/navigations/auth.stacknavigations';

import { store } from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <AuthStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
