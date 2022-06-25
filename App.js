/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Theme } from './src/styles/theme/ThemeStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/navigation/TabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

import AuthScreen from './src/auth/AuthScreen';

// const YourApp = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="dark-content"
//         backgroundColor={Theme.colors.white}
//         translucent={true}
//       />
//       <NavigationContainer>
//         <TabNavigator />
//       </NavigationContainer>
//     </View>
//   );
// };

const YourApp = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Theme.colors.white}
        translucent={true}
      />
      <AuthScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.backgroundColor,
  },
  simlpeText: {
    color: Theme.colors.black,
  },
});

export default YourApp;
