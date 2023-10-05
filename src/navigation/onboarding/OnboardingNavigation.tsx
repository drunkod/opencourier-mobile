import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen, OnboardingStackParamList } from './types';
import { LandingScreen } from '@app/screens/onboarding/Landing/Landing';
import { WelcomeScreen } from '@app/screens/onboarding/Welcome/Welcome';
import { Login } from '@app/screens/onboarding/Login/Login';

const OnboardingStackNavigator =
  createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack = () => {
  return (
    <OnboardingStackNavigator.Navigator>
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Landing}
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Welcome}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Login}
        component={Login}
        options={{ headerShown: false }}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
