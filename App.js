import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProfile from './components/UserProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;