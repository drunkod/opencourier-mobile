import { SCREEN_WIDTH } from '@app/utilities/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSmall: {
    width: 180,
    height: 180,
  },
  imageBIg: {
    width: SCREEN_WIDTH - 32,
    height: SCREEN_WIDTH - 32,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
  },
});
