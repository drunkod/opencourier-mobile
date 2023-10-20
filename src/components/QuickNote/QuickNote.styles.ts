import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.gray4,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Colors.black1,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
