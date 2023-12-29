import { Colors } from '@app/styles/colors';
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
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 18,
    color: Colors.black1,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    color: Colors.black1,
    marginTop: 8,
  },
});
