import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDay: {
    fontWeight: '700',
    color: Colors.black1,
    marginBottom: 8,
  },
  text: {
    color: Colors.black1,
  },
});
