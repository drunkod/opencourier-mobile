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
    justifyContent: 'center',
  },
  textInput: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '600',
    height: 24,
  },
  labelError: {
    alignSelf: 'stretch',
    color: Colors.red1,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
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
