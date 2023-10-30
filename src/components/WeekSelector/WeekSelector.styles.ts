import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {
    flex: 1,
  },
  textPrice: {
    fontSize: 20,
    color: Colors.black1,
    textAlign: 'center',
  },
  textDate: {
    fontSize: 20,
    color: Colors.gray15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 11,
  },
  separator: {
    width: 155,
    height: 1,
    backgroundColor: Colors.gray16,
    alignSelf: 'center',
  },
});
