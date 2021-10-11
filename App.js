/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import MapScreen from './src/screens/MapScreen';
import PieScreen from './src/screens/pie'


const App = () => {
  return (

    // <View style={{ flex: 1 }}>
    //   <PieScreen />
    // </View>
    <MapScreen />
    // <PieScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default App;
