import { Colors } from '@app/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  imageOpenDeli: {
    position: 'absolute',
    left: 32,
  },
  textTitle: {
    fontSize: 56,
    fontWeight: '700',
    marginBottom: 22,
  },
  textSubtitle: {
    fontSize: 18,
  },
  buttonSignup: {
    marginTop: 80,
  },
  buttonLogin: {
    marginTop: 16,
  },
});
