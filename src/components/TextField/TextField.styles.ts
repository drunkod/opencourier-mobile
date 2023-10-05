import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  labelTitle: {
    color: Colors.black,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '700',
  },
  containerTextField: {
    flex: 1,
    height: 58,
    justifyContent: 'center',
  },
  textInput: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '400',
    height: 24,
  },
  labelError: {
    marginTop: 16,
    alignSelf: 'stretch',
    color: Colors.red1,
    fontSize: 14,
    lineHeight: 20,
  },
  inputContainer: {
    marginTop: 12,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: Colors.gray1,
    paddingHorizontal: 16,
  },
  textShow: {
    fontSize: 11,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  textLabel: {
    fontSize: 12,
    color: Colors.black1,
  },
  checkmark: {
    width: 24,
    height: 24,
  },
});
