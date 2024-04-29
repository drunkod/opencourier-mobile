import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  textContent: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.black,
  },
  textTitle: {
    fontSize: 56,
    fontWeight: '700',
    marginBottom: 22,
  },
  textSubtitle: {
    fontSize: 18,
    marginBottom: 22,
  },
  buttonSignup: {
    marginTop: 80,
  },
  buttonLogin: {
    marginTop: 16,
  },
  textField: {
    marginBottom: 22,
    color: Colors.black,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.black1,
    marginTop: 16,
  },
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  textButton: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.gray23,
  },
  imageLogin: {
    height: 20,
    width: 20,
    marginLeft: 4,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.white,
  },
});
