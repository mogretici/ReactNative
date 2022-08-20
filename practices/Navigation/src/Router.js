import {NativeBaseProvider, Text, View} from 'native-base';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './pages/Main';
import Register from './pages/Register';
import Profile from './pages/Profile';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="MainPage"
            component={Main}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="RegisterPage"
            component={Register}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ProfilePage"
            component={Profile}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Router;
