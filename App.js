import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './src/screens/Login';
import MemoEdit from './src/screens/MemoEdit';
import FlatMemoList from './src/screens/FlatMemoList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name='FlatMemoList'
          component={FlatMemoList}
          options={{
            title: 'メモ一覧',
            headerBackVisible: false,
            gestureEnabled: false,
            // headerRight: () => <MaterialCommunityIcons name='logout' size={24} color='#5dacbd' />,
          }}
        />
        <Stack.Screen
          name='MemoEdit'
          component={MemoEdit}
          options={{
            title: '',
            headerBackVisible: false,
            gestureEnabled: false,
            // headerRight: () => <MaterialIcons name="save-alt" size={24} color="black" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
