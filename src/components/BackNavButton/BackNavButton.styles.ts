import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.gray1,
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  containerBlack: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    borderColor: Colors.white,
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconBlack: {
    tintColor: Colors.black,
  },
  iconWhite: {
    tintColor: Colors.white,
  },
});
