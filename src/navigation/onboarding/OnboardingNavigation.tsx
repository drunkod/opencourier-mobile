import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen, OnboardingStackParamList } from './types';
import { LandingScreen } from '@app/screens/onboarding/Landing/Landing';
import { WelcomeScreen } from '@app/screens/onboarding/Welcome/Welcome';
import { LoginScreen } from '@app/screens/onboarding/Login/Login';
import { SignupScreen } from '@app/screens/onboarding/Signup/Signup';

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
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Signup}
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
