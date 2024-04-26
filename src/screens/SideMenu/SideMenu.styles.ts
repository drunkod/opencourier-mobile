import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  containerProfile: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 16,
  },
  textName: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 8,
    color: Colors.black,
  },
  separator: {
    height: 2,
    backgroundColor: Colors.gray1,
    marginVertical: 8,
  },
  cell: {
    marginVertical: 8,
  },
});
