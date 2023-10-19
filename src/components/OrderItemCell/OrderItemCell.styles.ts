import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginVertical: 11,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 8,
    color: Colors.gray11,
  },
});
