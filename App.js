import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import MemoEdit from './src/screens/MemoEdit';
import FlatMemoList from './src/screens/FlatMemoList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        {<Stack.Screen name='FlatMemoList' component={FlatMemoList} />}
        <Stack.Screen name='MemoEdit' component={MemoEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
