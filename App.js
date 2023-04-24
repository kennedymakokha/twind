import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './src/navigations/auth.stacknavigations';

import store from './redux/store'
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
