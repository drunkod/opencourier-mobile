import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
  },
  containerOutUntoggled: {
    width: 32,
    height: 32,
    backgroundColor: Colors.gray1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.black1,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },
  containerOutToggled: {
    width: 32,
    height: 32,
    backgroundColor: Colors.black1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIn: {
    width: 28,
    height: 28,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
});
