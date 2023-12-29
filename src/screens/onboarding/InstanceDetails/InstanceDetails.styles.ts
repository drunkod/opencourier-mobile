import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    paddingTop: 16,
  },
  image: {
    width: 32,
    height: 32,
    marginLeft: 8,
  },
  containerHeaderText: {
    marginLeft: 8,
  },
  textName: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.black,
  },
  textCount: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    color: Colors.blackAlpha05,
  },
  content: {
    flex: 1,
    marginVertical: 22,
    paddingHorizontal: 12,
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
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.white,
  },
});
