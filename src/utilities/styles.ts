import { Platform } from 'react-native';

export const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number,
  shadowColor: string,
) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColor,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    return {
      elevation,
      shadowColor: shadowColor,
    };
  }
};
