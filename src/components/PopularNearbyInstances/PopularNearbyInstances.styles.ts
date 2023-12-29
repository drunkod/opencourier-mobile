import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue5,
    borderRadius: 12,
    padding: 16,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.black7,
    lineHeight: 24,
    marginLeft: 8,
  },
});
