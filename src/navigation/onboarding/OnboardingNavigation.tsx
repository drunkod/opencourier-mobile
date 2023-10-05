import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreen, OnboardingStackParamList } from './types';
import { LandingScreen } from '@app/screens/onboarding/Landing/Landing';
import { WelcomeScreen } from '@app/screens/onboarding/Welcome/Welcome';
import { LoginScreen } from '@app/screens/onboarding/Login/Login';
import { SignupScreen } from '@app/screens/onboarding/Signup/Signup';
import { ForgotPasswordScreen } from '@app/screens/onboarding/ForgotPassword/ForgotPassword';

const OnboardingStackNavigator =
  createNativeStackNavigator<OnboardingStackParamList>();

const DEFAULT_OPTIONS = { headerShown: false };

export const OnboardingStack = () => {
  return (
    <OnboardingStackNavigator.Navigator>
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Landing}
        component={LandingScreen}
        options={DEFAULT_OPTIONS}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Welcome}
        component={WelcomeScreen}
        options={DEFAULT_OPTIONS}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Login}
        component={LoginScreen}
        options={DEFAULT_OPTIONS}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.Signup}
        component={SignupScreen}
        options={DEFAULT_OPTIONS}
      />
      <OnboardingStackNavigator.Screen
        name={OnboardingScreen.ForgotPassword}
        component={ForgotPasswordScreen}
        options={DEFAULT_OPTIONS}
      />
    </OnboardingStackNavigator.Navigator>
  );
};
