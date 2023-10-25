import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 16,
  },
  safe: {
    flex: 1,
  },
  containerButtonOk: {
    width: 60,
    height: 60,
    backgroundColor: Colors.white,
    borderColor: Colors.gray1,
    borderWidth: 4,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCheckmark: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    borderRadius: 13,
  },
  checkmark: {
    width: 14,
    height: 14,
    tintColor: Colors.white,
  },
  containerRetake: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageTaken: {
    borderRadius: 4,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  placeholder: {
    width: 60,
    height: 60,
  },
  textAttach: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 19,
    marginTop: 4,
  },
});
