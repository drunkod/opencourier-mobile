import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.black1,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  search: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
  },
});
