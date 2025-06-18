import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../page/SplashScreen';
import MainPage from '../page/MainPage';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import StudentPage from '../page/StudentPage';
import TeacherPage from '../page/TeacherPage';
import GuestPage from '../page/GuestPage';

export type RootStackParamList = {
  SplashScreen: undefined;
  MainPage: undefined;
  SignIn: undefined;
  SignUp: undefined;
  StudentPage: undefined;
  TeacherPage: undefined;
  GuestPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="StudentPage" component={StudentPage} />
        <Stack.Screen name="TeacherPage" component={TeacherPage} />
        <Stack.Screen name="GuestPage" component={GuestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 