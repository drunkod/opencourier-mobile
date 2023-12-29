import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparentModalBackground,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: Colors.white,
    paddingTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 32,
  },
  textDone: {
    fontSize: 20,
    fontWeight: '800',
  },
});
