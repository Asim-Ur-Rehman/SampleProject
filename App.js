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
import Pie from 'react-native-pie';
import MapScreen from './src/screens/MapScreen';
import { VictoryPie } from 'victory-native'


const App = () => {
  return (

    // <View style={{ flex: 1 }}>
    //   <PieScreen />
    // </View>
  // <View style={{height: 50, width: 50, backgroundColor: 'red'}}>
  //     <VictoryPie
  //       padAngle={({ datum }) => datum.y}
  //       innerRadius={100}
  //       data={[
  //         { x: 1, y: 2 },
  //         { x: 2, y: 3, label: "two" },
  //         { x: 3, y: 5 }
  //       ]}
  //       padding={10}
  //     />
  // </View>
    <MapScreen />
  //   <Pie
  //   dividerSize={20}
  //   strokeCap="butt"
  //     radius={40}
  //     innerRadius={30}
  //     sections={[
  //         {
  //             percentage: 60,
  //             color: 'red',
  //         },
  //         {
  //             percentage: 20,
  //             color: 'blue',
  //         },
  //         {
  //             percentage: 10,
  //             color: 'yellow',
  //         },
  //         {
  //             percentage: 10, 
  //             color: 'green',
  //         },
  //     ]}
  // />
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
