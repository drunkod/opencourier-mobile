import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.gray4,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: Colors.black1,
    fontWeight: '600',
  },
  icon: {
    width: 16,
    height: 16,
  },
});
